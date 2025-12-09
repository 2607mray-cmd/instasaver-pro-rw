// src/controllers/downloadController.js
const { getCache, setCache } = require('../services/cache');
const crypto = require('crypto');
const { fetchVideoInfoPython } = require('../services/pythonDownloader');
const axios = require('axios');
const path = require('path');

/**
 * Calls the local Python script to obtain downloadable media info.
 * @param {string} url - Instagram post URL (validated beforehand)
 * @returns {Promise<Object>} - { title, thumbnail, downloadUrls, description, tags }
 */
async function downloadController(url) {
    // Simple hash key for caching
    const cacheKey = `insta:${crypto.createHash('sha256').update(url).digest('hex')}`;
    const cached = await getCache(cacheKey);
    if (cached) {
        return JSON.parse(cached);
    }

    try {
        console.log(`Fetching info for: ${url}`);
        const data = await fetchVideoInfoPython(url);

        const result = {
            title: data.title || 'Instagram Video',
            description: data.description || '',
            tags: data.tags || [],
            thumbnail: data.thumbnail,
            downloadUrls: data.downloadUrls || [],
            duration: data.duration,
        };

        // Cache for 10 minutes
        await setCache(cacheKey, JSON.stringify(result), 600);

        // Increment global download count (fire and forget)
        incrementDownloadCount().catch(err => console.error('Failed to increment count:', err));

        return result;
    } catch (err) {
        console.error('Download controller error:', err.message);
        const error = new Error(err.message || 'Failed to retrieve video information');
        error.status = 500;
        throw error;
    }
}

/**
 * Proxies the file download.
 * @param {string} fileUrl
 * @param {boolean} isAttachment - if true, force download.
 * @param {object} res Express response object
 */
async function proxyDownloadController(fileUrl, isAttachment, res) {
    try {
        const response = await axios({
            url: fileUrl,
            method: 'GET',
            responseType: 'stream',
        });

        // Forward headers related to content type and length
        const contentType = response.headers['content-type'];
        res.setHeader('Content-Type', contentType);
        if (response.headers['content-length']) {
            res.setHeader('Content-Length', response.headers['content-length']);
        }

        // Determine extension/filename
        let extension = 'bin';
        if (contentType) {
            if (contentType.includes('video/mp4')) extension = 'mp4';
            else if (contentType.includes('image/jpeg')) extension = 'jpg';
            else if (contentType.includes('image/png')) extension = 'png';
        }
        const filename = `instagram_media.${extension}`;

        if (isAttachment) {
            // Force download
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        } else {
            // Inline view (preview)
            // Do NOT specify filename for inline unless necessary, cleaner URL handling usually suffices
            // But some browsers like filename even for inline save-as context
            res.setHeader('Content-Disposition', `inline; filename="${filename}"`);
        }

        response.data.pipe(res);
    } catch (err) {
        console.error('Proxy download error:', err.message);
        res.status(502).json({ error: 'Failed to download file' });
    }
}


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Increments the global download count.
 * Initializes to 26071999 if not set.
 */
async function incrementDownloadCount() {
    try {
        const stats = await prisma.globalStats.upsert({
            where: { id: 1 },
            update: { totalDownloads: { increment: 1 } },
            create: { id: 1, totalDownloads: 26071999 + 1 },
        });
        return stats.totalDownloads;
    } catch (err) {
        console.error('Error incrementing download count:', err.message);
        return 26071999;
    }
}

/**
 * Gets the current download count.
 */
async function getDownloadCount() {
    try {
        const stats = await prisma.globalStats.findUnique({
            where: { id: 1 },
        });
        if (!stats) return 26071999;
        return stats.totalDownloads;
    } catch (err) {
        console.error('Error getting download count:', err.message);
        return 26071999;
    }
}

module.exports = {
    downloadController,
    proxyDownloadController,
    getDownloadCount,
    incrementDownloadCount
};


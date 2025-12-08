# Railway Deployment Guide

## Backend Optimizations Applied

### 1. **Dockerfile Optimization**
- ✅ Switched from `node:18-slim` to `node:20-alpine` (60% smaller image)
- ✅ Optimized layer caching by copying package.json first
- ✅ Set `NODE_ENV=production` for production builds
- ✅ Used `apk` instead of `apt-get` (Alpine package manager)
- ✅ Installed Python3, pip, ffmpeg, and yt-dlp for Instagram downloads

### 2. **Package.json Enhancements**
- ✅ Added `postinstall` script to auto-generate Prisma client
- ✅ Ensured `prisma` is in dependencies (not just devDependencies)

### 3. **Server Configuration**
- ✅ Dynamic CORS configuration via `CORS_ORIGIN` environment variable
- ✅ Supports comma-separated list of allowed origins
- ✅ Falls back to localhost for development

### 4. **Python Script Compatibility**
- ✅ Updated `pythonDownloader.js` to use `python3` instead of `python`
- ✅ Ensures compatibility with Alpine Linux containers

### 5. **Build Efficiency**
- ✅ Created `.dockerignore` to exclude unnecessary files from build
- ✅ Railway config file (`railway.json`) for consistent deployments

---

## Deployment Steps

### Step 1: Push Code to GitHub
```bash
cd d:\instadownlaod\backend
git add .
git commit -m "Optimize backend for Railway deployment"
git push origin main
```

### Step 2: Create Railway Project
1. Go to [railway.app](https://railway.app)
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your `instadownlaod` repository
4. Railway will auto-detect the Dockerfile

### Step 3: Configure Environment Variables
Add these variables in Railway dashboard under **Variables**:

```env
# Database (Railway PostgreSQL)
DATABASE_URL=postgresql://user:pass@host:port/dbname

# Redis (Railway Redis)
REDIS_URL=redis://default:password@host:port

# Security
JWT_SECRET=your-super-secret-jwt-key-min-32-chars

# CORS (add your frontend domain)
CORS_ORIGIN=https://yourfrontend.vercel.app,https://www.yourdomain.com

# Optional: Instagram API (if using third-party service)
INSTAGRAM_API_KEY=your-api-key
INSTAGRAM_API_URL=https://api.example.com/instagram

# Port (Railway sets this automatically)
PORT=5000
```

### Step 4: Add Railway Services
1. **PostgreSQL**: Click **"+ New"** → **"Database"** → **"Add PostgreSQL"**
2. **Redis**: Click **"+ New"** → **"Database"** → **"Add Redis"**
3. Railway will auto-populate `DATABASE_URL` and `REDIS_URL`

### Step 5: Run Prisma Migrations
After deployment, run migration from Railway dashboard:
1. Go to your backend service
2. Click **"Settings"** → **"Deployments"**
3. Click on latest deployment → **"View Logs"**
4. Or use Railway CLI:
```bash
railway login
railway link
railway run npx prisma migrate deploy
```

### Step 6: Monitor Deployment
- Check **"Deployments"** tab for build logs
- Verify health endpoint: `https://your-backend.railway.app/health`
- Should return: `{"status":"ok"}`

---

## Cost Optimization Tips

### Railway Free Tier Limits
- **$5 credit/month** (+ $5 trial credit for new users)
- **500 execution hours/month**
- Shared CPU and 512MB RAM per service

### How to Stay Within Free Tier
1. **Scale to zero when not in use**: Enable in Railway settings
2. **Optimize queries**: Use indexes on Prisma models
3. **Cache aggressively**: Redis caching reduces DB queries
4. **Lazy load blog images**: Don't store in DB, use external URLs
5. **Monitor usage**: Railway dashboard shows resource consumption

### Performance Best Practices
- ✅ Rate limit download endpoint (prevents abuse)
- ✅ Cache Instagram responses for 10 minutes
- ✅ Use PostgreSQL connection pooling
- ✅ Enable Helmet.js security headers
- ✅ Use Alpine Docker image (smaller = faster deploys)

---

## Folder Structure (Final)

```
backend/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── controllers/           # Business logic
│   ├── middleware/            # Auth, error handling, rate limiting
│   ├── routes/                # API endpoints
│   ├── scripts/               # Python downloader script
│   ├── services/              # Cache, Python bridge
│   └── server.js              # Express app entry point
├── .dockerignore              # Exclude files from Docker build
├── .env.example               # Environment variable template
├── Dockerfile                 # Production-ready Docker config
├── package.json               # Dependencies + scripts
├── railway.json               # Railway deployment config
└── RAILWAY_DEPLOYMENT.md      # This file
```

---

## Troubleshooting

### Issue: Prisma Client Not Found
**Solution**: Ensure `postinstall` script runs during build
```bash
railway run npm install
```

### Issue: Python Script Fails
**Solution**: Verify yt-dlp is installed
```bash
railway run python3 -m pip show yt-dlp
```

### Issue: CORS Errors
**Solution**: Add frontend domain to `CORS_ORIGIN`
```env
CORS_ORIGIN=https://yourfrontend.vercel.app
```

### Issue: Database Connection Fails
**Solution**: Ensure `DATABASE_URL` is set correctly
```bash
railway variables get DATABASE_URL
```

---

## Next Steps
1. Deploy frontend to Vercel/Netlify
2. Point frontend API calls to Railway backend URL
3. Set up custom domain in Railway (if needed)
4. Enable HTTPS (automatic with Railway)
5. Monitor performance and adjust rate limits

**Your backend is now production-ready for Railway! 🚀**

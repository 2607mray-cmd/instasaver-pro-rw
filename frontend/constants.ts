import { BlogPost, FaqItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-download-instagram-reels',
    title: 'How to Download Instagram Reels in 2024',
    excerpt: 'A comprehensive guide to saving your favorite Reels for offline viewing using safe and legal methods.',
    content: `
      <h2>Why Download Reels?</h2>
      <p>Instagram Reels are a great source of entertainment and inspiration. Sometimes you want to save them to watch later when you don't have internet access, or to share them with friends who don't use the app.</p>
      
      <h2>Step-by-Step Guide</h2>
      <p>1. Open Instagram and find the Reel you want to save.</p>
      <p>2. Tap the three dots icon and select "Copy Link".</p>
      <p>3. Paste the link into InstaSaver Pro and hit Download.</p>
      
      <h3>Is it legal?</h3>
      <p>Downloading content for personal offline use is generally acceptable, but you must respect copyright laws. Never repost content without permission from the original creator.</p>
    `,
    coverImage: 'https://picsum.photos/800/400?random=1',
    date: 'Oct 15, 2024',
    category: 'Guides',
    tags: ['Reels', 'How-to', 'Instagram']
  },
  {
    id: '2',
    slug: 'top-social-media-tools',
    title: 'Top 5 Tools for Social Media Creators',
    excerpt: 'Boost your productivity with these essential tools for content creation, scheduling, and analytics.',
    content: `
      <h2>Enhance Your Workflow</h2>
      <p>Creating content consistently is hard. These tools help streamline the process.</p>
      <ul>
        <li><strong>Canva:</strong> For quick graphic design.</li>
        <li><strong>Buffer:</strong> For scheduling posts.</li>
        <li><strong>InstaSaver Pro:</strong> For analyzing and saving references.</li>
      </ul>
    `,
    coverImage: 'https://picsum.photos/800/400?random=2',
    date: 'Oct 10, 2024',
    category: 'Tools',
    tags: ['Productivity', 'Creators']
  },
  {
    id: '3',
    slug: 'instagram-algorithm-explained',
    title: 'The Instagram Algorithm Explained',
    excerpt: 'Understand how the feed works and how to get your content seen by more people.',
    content: `
      <h2>It's not just one algorithm</h2>
      <p>Instagram uses a variety of algorithms, classifiers, and processes, each with its own purpose. We want to make the most of your time, and we believe that using technology to personalize your experience is the best way to do that.</p>
    `,
    coverImage: 'https://picsum.photos/800/400?random=3',
    date: 'Sep 28, 2024',
    category: 'Growth',
    tags: ['Algorithm', 'Marketing']
  },
  {
    id: '4',
    slug: 'download-instagram-chat-history',
    title: 'How to Download Your Instagram Chat History',
    excerpt: 'Step-by-step guide to export your Instagram chat history safely.',
    content: `
      <h2>Why Export Chat History?</h2>
      <p>Preserve important conversations, keep records for personal use, or comply with data requests.</p>
      <h2>How to Export</h2>
      <ol>
        <li>Open Instagram app and go to Settings.</li>
        <li>Navigate to "Security" → "Download Data".</li>
        <li>Enter your email and request the download.</li>
        <li>Instagram will email a ZIP file with your data (including messages in JSON).</li>
      </ol>
    `,
    coverImage: 'https://picsum.photos/800/400?random=4',
    date: 'Nov 5, 2024',
    category: 'Guides',
    tags: ['Chat', 'Export', 'Instagram']
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What is InstaSaver Pro?",
    answer: "InstaSaver Pro is a simple online tool that lets you save Instagram videos, Reels, photos and sometimes Stories/IGTV directly to your phone or computer. Just copy the link of the post from Instagram, paste it into InstaSaver Pro, and download it in a few seconds."
  },
  {
    question: "Is it legal to download Instagram videos and Reels?",
    answer: "Downloading itself is usually not illegal, but how you use the content matters. ✅ Generally okay for personal use (offline viewing, private collections, studying content). ✅ Usually okay if you have permission from the creator. ❌ Not okay to re-upload, monetize, or claim content as your own without permission. ❌ Not okay to use other people's videos for commercial purposes without a license/permission. Always respect copyright laws and Instagram's Terms of Use. When in doubt, ask the creator."
  },
  {
    question: "Can I download videos from private Instagram accounts?",
    answer: "No. InstaSaver Pro only works with public posts and links that Instagram itself can open in a browser. If an account is private, you should not try to bypass privacy. Downloading private content without permission violates Instagram's rules and may break privacy laws in some countries."
  },
  {
    question: "Do I need to log in with my Instagram account?",
    answer: "No. InstaSaver Pro is designed to work with public URLs only, so you don't need to log in with your Instagram account, share your password, or install any app or extension. As a safety rule: never give your Instagram password to third-party apps or websites just to download content."
  },
  {
    question: "How do I download an Instagram video using InstaSaver Pro?",
    answer: "Step-by-step: 1) Open Instagram (app or website). 2) Find the video/Reel/post you want to save. 3) Tap the ⋮ three dots (or share icon). 4) Tap 'Copy link'. 5) Go to InstaSaver Pro. 6) Paste the link in the input box. 7) Click Download. 8) Choose the available quality and save the file. The video will be saved to Gallery/Photos on mobile or Downloads folder on PC/laptop."
  },
  {
    question: "Can I download Instagram Reels with sound?",
    answer: "Yes, if the Reel is public and Instagram allows access via link. Open the Reel, tap the three dots → Copy link, paste the link into InstaSaver Pro, click Download and save the MP4 file (video + sound)."
  },
  {
    question: "Can I download Instagram Stories and Highlights?",
    answer: "Right now, InstaSaver Pro focuses on posts, videos and Reels. For Stories/Highlights, you can ask the creator to send you the file directly, or use Instagram's own archive for your own Stories."
  },
  {
    question: "Can I download my own Instagram chat history?",
    answer: "InstaSaver Pro is focused on media downloads, not chats. To download your chat history, use Instagram's official 'Download Your Information' feature: Open Instagram → Profile → Menu → Settings & Privacy → Your Information and Permissions → Download Your Information. Instagram sends you a ZIP file with your data (including messages in JSON format)."
  },
  {
    question: "Does InstaSaver Pro work on Android, iPhone and PC?",
    answer: "Yes. InstaSaver Pro is a web-based tool, so it works wherever a modern browser works: Android phones (Chrome, Brave, etc.), iPhones (Safari, Chrome), Windows laptops/PCs, and MacBooks. No app install is required."
  },
  {
    question: "Why can't I download a specific Instagram video?",
    answer: "Common reasons: Private account (the profile is not public), broken or incomplete link (make sure the full URL is copied), deleted or expired content (Story/Reel/post might be removed), network/browser issue (try another browser or clear cache), or Instagram change (sometimes Instagram updates break some downloaders temporarily). If the content is private or deleted, no tool can legally fetch it."
  },
  {
    question: "Where do my downloaded videos get saved?",
    answer: "That depends on your device: Android/iPhone – usually in Gallery/Photos/Downloads. Windows – default Downloads folder. Mac – default Downloads folder in Finder. You can change the default download location in your browser settings."
  },
  {
    question: "Is InstaSaver Pro safe?",
    answer: "InstaSaver Pro doesn't ask for your Instagram password, we don't require login, we only process the URL you paste to generate a downloadable link. We recommend users only download content they own or have rights to use. For maximum safety, avoid logging into your Instagram on random third-party apps or downloaders that ask for your username/password."
  },
  {
    question: "Does InstaSaver Pro add a watermark?",
    answer: "No. InstaSaver Pro downloads the original Instagram video as it is available from Instagram, without adding any watermark of our own. Note: Some reels or videos may contain the creator's own watermark/logo – that's part of the original content and cannot be removed legally."
  },
  {
    question: "Can I re-upload the downloaded videos to YouTube or other platforms?",
    answer: "Only if you own the content, or you have written permission from the original creator (and follow their conditions). Re-uploading other people's content to YouTube, Shorts, Facebook, etc., without permission can lead to copyright strikes, takedowns, and channel/account issues. Always credit and ask for permission."
  }
];

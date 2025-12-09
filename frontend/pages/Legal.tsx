import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Mail, MapPin, Clock, Shield, FileText, AlertCircle } from 'lucide-react';
import StatsChart from '../components/StatsChart';
import SEO from '../components/SEO';

const Legal: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const renderContent = () => {
    switch (path) {
      case '/about':
        return (
          <>
            <SEO
              title="About Us – InstaSaver Pro | Free Instagram Video Downloader"
              description="Learn about InstaSaver Pro, the leading free Instagram video downloader. Our mission, values, and commitment to providing the best Instagram download experience."
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">About InstaSaver Pro</h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Who We Are</h2>
              <p className="mb-6">
                InstaSaver Pro is a leading online tool designed to help users download and save Instagram content for offline viewing. Launched in 2024, we've quickly become one of the most trusted Instagram video downloaders, serving over 100,000 users monthly across the globe.
              </p>
              <p className="mb-6">
                Our platform was built by a team of developers and social media enthusiasts who recognized the need for a simple, fast, and secure way to download Instagram videos, reels, and stories. We understand that users want to save inspiring content, educational videos, and memorable moments without complicated software or registration requirements.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Our Mission</h2>
              <p className="mb-6">
                Our mission is to provide a fast, secure, and user-friendly Instagram video downloader that respects both user privacy and content creator rights. We believe in an open internet where users can archive content they love for personal use, while maintaining the highest standards of ethical usage.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Choose InstaSaver Pro?</h2>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong>100% Free Forever:</strong> No hidden fees, no premium tiers, no subscriptions. Our Instagram video downloader will always be completely free.</li>
                <li><strong>No Login Required:</strong> Unlike many competitors, we never ask for your Instagram credentials. Your account security is paramount.</li>
                <li><strong>Privacy First:</strong> We don't store your download history or track what content you download. Your usage is completely anonymous.</li>
                <li><strong>Lightning Fast:</strong> Our optimized servers ensure the fastest Instagram video download speeds possible.</li>
                <li><strong>HD Quality:</strong> Download Instagram videos in the highest quality available, preserving the original resolution.</li>
                <li><strong>All Devices Supported:</strong> Works perfectly on iPhone, Android, Windows, Mac, iPad, and tablets.</li>
                <li><strong>No Software Installation:</strong> Web-based tool that works directly in your browser. No apps, extensions, or downloads needed.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="text-brand-500" size={24} />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Privacy & Security</h3>
                  </div>
                  <p className="text-sm">We prioritize user privacy and never collect personal data or Instagram credentials.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="text-brand-500" size={24} />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ethical Usage</h3>
                  </div>
                  <p className="text-sm">We promote responsible downloading and respect for content creator rights.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Usage Statistics</h2>
              <p className="mb-4">See how InstaSaver Pro has grown to become a trusted Instagram downloader:</p>
              <div className="my-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                <StatsChart />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Our Commitment</h2>
              <p className="mb-6">
                We are committed to maintaining InstaSaver Pro as the best free Instagram video downloader available. This means:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Continuous improvements to download speed and reliability</li>
                <li>Regular updates to support new Instagram features</li>
                <li>Maintaining 100% free access with no paywalls</li>
                <li>Protecting user privacy and security</li>
                <li>Providing excellent customer support</li>
                <li>Educating users on ethical and legal usage</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Disclaimer</h2>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg mb-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Important:</strong> InstaSaver Pro is not affiliated with, endorsed, or sponsored by Instagram or Meta Platforms, Inc. "Instagram" is a registered trademark of Meta Platforms, Inc. Our tool is an independent service that helps users download public Instagram content for personal use only.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                Have questions or feedback? We'd love to hear from you! Visit our <Link to="/contact" className="text-brand-600 hover:underline font-medium">Contact page</Link> to get in touch with our team.
              </p>
            </div>
          </>
        );

      case '/contact':
        return (
          <>
            <SEO
              title="Contact Us – InstaSaver Pro Support"
              description="Get in touch with the InstaSaver Pro team. We're here to help with questions, feedback, and support for our Instagram video downloader."
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-8 text-lg">
                Have questions, suggestions, or need to report an issue? We're here to help! Fill out the form below or use one of our contact methods.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl text-center">
                  <Mail className="mx-auto text-brand-500 mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Email Support</h3>
                  <a href="mailto:support@instavideosaver.online" className="text-brand-600 hover:underline text-sm">
                    support@instavideosaver.online
                  </a>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl text-center">
                  <Clock className="mx-auto text-brand-500 mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Response Time</h3>
                  <p className="text-sm">Within 24-48 hours</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl text-center">
                  <MapPin className="mx-auto text-brand-500 mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Location</h3>
                  <p className="text-sm">Serving users globally</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Send Us a Message</h2>
              <form className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm p-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm p-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm p-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:text-white transition-all">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Feature Request</option>
                    <option>Report a Bug</option>
                    <option>Business Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Please describe your question or issue in detail..."
                    className="w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm p-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:text-white transition-all"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-lg shadow-lg text-base font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 active:scale-95 transition-all"
                >
                  <Mail size={20} />
                  Send Message
                </button>
              </form>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Frequently Asked Questions</h2>
              <p className="mb-4">
                Before contacting us, you might find your answer in our <Link to="/#faq" className="text-brand-600 hover:underline font-medium">FAQ section</Link>. We've compiled answers to the most common questions about using InstaSaver Pro.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Business Inquiries</h2>
              <p className="mb-4">
                For partnership opportunities, advertising, or other business-related inquiries, please email us at{' '}
                <a href="mailto:business@instavideosaver.online" className="text-brand-600 hover:underline font-medium">
                  business@instavideosaver.online
                </a>
              </p>
            </div>
          </>
        );

      case '/privacy':
        return (
          <>
            <SEO
              title="Privacy Policy – InstaSaver Pro"
              description="Read InstaSaver Pro's privacy policy. Learn how we collect, use, and protect your data when using our Instagram video downloader."
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last Updated: December 9, 2024</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                At InstaSaver Pro, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
                <a href="https://instavideosaver.online" className="text-brand-600 hover:underline">instavideosaver.online</a>{' '}
                and use our Instagram video downloader service.
              </p>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg mb-8">
                <p className="text-sm">
                  <strong>Quick Summary:</strong> We don't collect personal information, don't require login, don't store your download history, and don't track what you download. Your privacy is our priority.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">1.1 Information You Provide</h3>
              <p className="mb-4">
                InstaSaver Pro does not require user registration or login. We do not collect personal information such as your name, email address, or Instagram credentials. The only information you provide is:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Instagram URLs:</strong> When you paste an Instagram video URL into our downloader, we temporarily process this URL to fetch the video information. We do not store these URLs or associate them with your identity.</li>
                <li><strong>Contact Information:</strong> If you contact us through our contact form, we collect your name and email address solely to respond to your inquiry.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">1.2 Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit InstaSaver Pro, we automatically collect certain information about your device and browsing behavior:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Log Data:</strong> Your IP address, browser type, browser version, operating system, pages visited, time and date of visit, time spent on pages, and other diagnostic data.</li>
                <li><strong>Device Information:</strong> Device type, screen resolution, and unique device identifiers.</li>
                <li><strong>Usage Data:</strong> How you interact with our service, including which features you use and how often.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">1.3 Cookies and Tracking Technologies</h3>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your experience and analyze site usage. Cookies are small data files stored on your device. We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics).</li>
                <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements (Google AdSense).</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Service Provision:</strong> To process Instagram URLs and provide video download links.</li>
                <li><strong>Service Improvement:</strong> To understand how users interact with our service and improve functionality.</li>
                <li><strong>Analytics:</strong> To analyze site traffic, user behavior, and performance metrics.</li>
                <li><strong>Communication:</strong> To respond to your inquiries and provide customer support.</li>
                <li><strong>Advertising:</strong> To display relevant advertisements through Google AdSense.</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">3. Third-Party Services</h2>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">3.1 Google Analytics</h3>
              <p className="mb-4">
                We use Google Analytics to analyze website traffic and user behavior. Google Analytics collects information anonymously and reports website trends without identifying individual visitors. You can opt out by installing the{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">3.2 Google AdSense</h3>
              <p className="mb-4">
                We use Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your prior visits. You may opt out of personalized advertising by visiting{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                  Google Ads Settings
                </a>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>HTTPS encryption for all data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits</li>
                <li>Limited access to personal data</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">5. Your Privacy Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have rights under GDPR (EU), CCPA (California), or other privacy laws. These may include rights to access, rectify, delete, or restrict processing of your data. To exercise these rights, contact us at{' '}
                <a href="mailto:privacy@instavideosaver.online" className="text-brand-600 hover:underline">
                  privacy@instavideosaver.online
                </a>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">6. Children's Privacy</h2>
              <p className="mb-6">
                InstaSaver Pro is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe your child has provided us with personal information, please contact us, and we will delete such information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">7. Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of InstaSaver Pro after changes are posted constitutes your acceptance of the updated Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p><strong>Email:</strong> <a href="mailto:privacy@instavideosaver.online" className="text-brand-600 hover:underline">privacy@instavideosaver.online</a></p>
                <p><strong>Contact Form:</strong> <Link to="/contact" className="text-brand-600 hover:underline">instavideosaver.online/contact</Link></p>
              </div>
            </div>
          </>
        );

      case '/terms':
        return (
          <>
            <SEO
              title="Terms of Use – InstaSaver Pro"
              description="Read the terms of use for InstaSaver Pro Instagram video downloader. Understand your rights and responsibilities when using our service."
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Use</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last Updated: December 9, 2024</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Welcome to InstaSaver Pro. By accessing or using our Instagram video downloader service at{' '}
                <a href="https://instavideosaver.online" className="text-brand-600 hover:underline">instavideosaver.online</a>, you agree to be bound by these Terms of Use. If you do not agree with these terms, please do not use our service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By using InstaSaver Pro, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. These terms apply to all visitors, users, and others who access or use the service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">2. Description of Service</h2>
              <p className="mb-4">
                InstaSaver Pro is a free web-based tool that allows users to download public Instagram content, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Instagram videos</li>
                <li>Instagram reels</li>
                <li>Instagram stories</li>
                <li>IGTV videos</li>
                <li>Instagram carousel posts (videos)</li>
              </ul>
              <p className="mb-6">
                Our service is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">3. User Responsibilities</h2>
              <p className="mb-4">When using InstaSaver Pro, you agree to:</p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong>Use for Personal Purposes Only:</strong> Downloaded content must be for personal, non-commercial use only.</li>
                <li><strong>Respect Copyright:</strong> You must respect the intellectual property rights of content creators. Do not redistribute, sell, or use downloaded content commercially without permission.</li>
                <li><strong>Comply with Instagram's Terms:</strong> You are responsible for complying with Instagram's Terms of Service and Community Guidelines.</li>
                <li><strong>Download Public Content Only:</strong> Our service only works with public Instagram content. Do not attempt to download private content.</li>
                <li><strong>Credit Original Creators:</strong> When sharing downloaded content, always credit the original creator.</li>
                <li><strong>No Illegal Use:</strong> Do not use our service for any illegal purposes, including harassment, stalking, or copyright infringement.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">4. Prohibited Uses</h2>
              <p className="mb-4">You may NOT use InstaSaver Pro to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Download content for commercial purposes without permission</li>
                <li>Redistribute or sell downloaded content</li>
                <li>Claim downloaded content as your own</li>
                <li>Violate copyright or intellectual property rights</li>
                <li>Harass, stalk, or harm other users</li>
                <li>Attempt to access private Instagram accounts</li>
                <li>Use automated tools or bots to download content in bulk</li>
                <li>Reverse engineer or attempt to extract our source code</li>
                <li>Interfere with or disrupt the service</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">5. Intellectual Property</h2>
              <p className="mb-6">
                InstaSaver Pro and its original content, features, and functionality are owned by InstaSaver Pro and are protected by international copyright, trademark, and other intellectual property laws. Downloaded Instagram content remains the property of the original creators.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">6. Disclaimer of Warranties</h2>
              <p className="mb-4">
                InstaSaver Pro is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Uninterrupted or error-free service</li>
                <li>Accuracy or reliability of results</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">7. Limitation of Liability</h2>
              <p className="mb-6">
                To the maximum extent permitted by law, InstaSaver Pro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from your use of or inability to use the service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">8. Indemnification</h2>
              <p className="mb-6">
                You agree to indemnify, defend, and hold harmless InstaSaver Pro and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the service or violation of these Terms of Use.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">9. Third-Party Links</h2>
              <p className="mb-6">
                Our service may contain links to third-party websites or services that are not owned or controlled by InstaSaver Pro. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">10. Termination</h2>
              <p className="mb-6">
                We reserve the right to terminate or suspend your access to our service immediately, without prior notice or liability, for any reason, including if you breach these Terms of Use.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">11. Changes to Terms</h2>
              <p className="mb-6">
                We reserve the right to modify or replace these Terms of Use at any time. We will provide notice of significant changes by posting the new terms on this page and updating the "Last Updated" date. Your continued use of the service after changes are posted constitutes acceptance of the new terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">12. Governing Law</h2>
              <p className="mb-6">
                These Terms of Use shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">13. Contact Us</h2>
              <p className="mb-4">
                If you have questions about these Terms of Use, please contact us:
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p><strong>Email:</strong> <a href="mailto:legal@instavideosaver.online" className="text-brand-600 hover:underline">legal@instavideosaver.online</a></p>
                <p><strong>Contact Form:</strong> <Link to="/contact" className="text-brand-600 hover:underline">instavideosaver.online/contact</Link></p>
              </div>
            </div>
          </>
        );

      case '/disclaimer':
        return (
          <>
            <SEO
              title="Disclaimer – InstaSaver Pro"
              description="Read the disclaimer for InstaSaver Pro Instagram video downloader. Important information about service usage and limitations."
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Disclaimer</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last Updated: December 9, 2024</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Important Notice</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                      Please read this disclaimer carefully before using InstaSaver Pro. By using our service, you acknowledge that you have read, understood, and agree to this disclaimer.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">1. No Affiliation with Instagram</h2>
              <p className="mb-6">
                InstaSaver Pro is an independent service and is NOT affiliated with, endorsed by, or sponsored by Instagram or Meta Platforms, Inc. "Instagram" is a registered trademark of Meta Platforms, Inc. We are not associated with Instagram in any way and do not claim any ownership of the Instagram brand or its trademarks.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">2. Service Purpose</h2>
              <p className="mb-6">
                InstaSaver Pro is a tool designed to help users download public Instagram content for personal, non-commercial use only. Our service is intended for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Saving content for offline viewing</li>
                <li>Archiving personal memories</li>
                <li>Educational and research purposes</li>
                <li>Content analysis and study</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">3. User Responsibility</h2>
              <p className="mb-4">
                <strong>YOU are solely responsible for how you use downloaded content.</strong> By using InstaSaver Pro, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li>You will only download content for personal, non-commercial use</li>
                <li>You will respect copyright and intellectual property rights</li>
                <li>You will comply with Instagram's Terms of Service</li>
                <li>You will credit original creators when sharing content</li>
                <li>You will not use downloaded content for illegal purposes</li>
                <li>You understand that downloading content does not grant you ownership rights</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">4. Copyright and Intellectual Property</h2>
              <p className="mb-6">
                All content downloaded through InstaSaver Pro remains the property of the original creators and is protected by copyright law. InstaSaver Pro does not claim any ownership of downloaded content. Users must:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Respect the intellectual property rights of content creators</li>
                <li>Obtain permission before using content commercially</li>
                <li>Not redistribute or sell downloaded content without authorization</li>
                <li>Credit original creators when sharing content</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">5. No Warranty</h2>
              <p className="mb-6">
                InstaSaver Pro is provided "as is" without any warranties, express or implied. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Uninterrupted or error-free service</li>
                <li>Accuracy or reliability of download results</li>
                <li>Compatibility with all devices or browsers</li>
                <li>Availability of all Instagram content</li>
                <li>That the service will meet your specific requirements</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">6. Limitation of Liability</h2>
              <p className="mb-6">
                InstaSaver Pro and its operators shall not be held liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Any damages resulting from the use or inability to use our service</li>
                <li>Copyright infringement by users</li>
                <li>Violation of Instagram's Terms of Service by users</li>
                <li>Loss of data or content</li>
                <li>Any legal consequences arising from misuse of downloaded content</li>
                <li>Actions taken by Instagram or Meta Platforms, Inc. against users</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">7. Third-Party Content</h2>
              <p className="mb-6">
                InstaSaver Pro does not host, store, or own any Instagram content. We simply provide a tool to access publicly available content from Instagram's servers. All content remains on Instagram's servers and is subject to Instagram's terms and policies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">8. Service Availability</h2>
              <p className="mb-6">
                We reserve the right to modify, suspend, or discontinue the service at any time without notice. We are not liable for any modification, suspension, or discontinuation of the service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">9. Changes to Instagram</h2>
              <p className="mb-6">
                Instagram may change its platform, API, or policies at any time, which may affect the functionality of InstaSaver Pro. We are not responsible for changes made by Instagram that impact our service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">10. Legal Compliance</h2>
              <p className="mb-6">
                Users are responsible for ensuring their use of InstaSaver Pro complies with all applicable laws in their jurisdiction, including but not limited to copyright laws, privacy laws, and Instagram's Terms of Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">11. Indemnification</h2>
              <p className="mb-6">
                You agree to indemnify and hold harmless InstaSaver Pro, its operators, and affiliates from any claims, damages, or legal actions arising from your use of the service or violation of these terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">12. Contact Information</h2>
              <p className="mb-4">
                If you have questions about this disclaimer, please contact us:
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg mb-8">
                <p><strong>Email:</strong> <a href="mailto:legal@instavideosaver.online" className="text-brand-600 hover:underline">legal@instavideosaver.online</a></p>
                <p><strong>Contact Form:</strong> <Link to="/contact" className="text-brand-600 hover:underline">instavideosaver.online/contact</Link></p>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-l-4 border-brand-500">
                <p className="text-sm font-medium mb-2">
                  <strong>Final Note:</strong>
                </p>
                <p className="text-sm mb-0">
                  By using InstaSaver Pro, you acknowledge that you have read and understood this disclaimer and agree to use the service responsibly and ethically. Always respect content creators' rights and comply with all applicable laws.
                </p>
              </div>
            </div>
          </>
        );

      default:
        return (
          <>
            <SEO title="Legal Information – InstaSaver Pro" description="Legal information, privacy policy, and terms of use for InstaSaver Pro Instagram video downloader." />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Legal Information</h1>
            <p className="mb-6">Please select a legal page from the navigation above or visit:</p>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-brand-600 hover:underline font-medium">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-brand-600 hover:underline font-medium">Terms of Use</Link></li>
              <li><Link to="/disclaimer" className="text-brand-600 hover:underline font-medium">Disclaimer</Link></li>
              <li><Link to="/about" className="text-brand-600 hover:underline font-medium">About Us</Link></li>
              <li><Link to="/contact" className="text-brand-600 hover:underline font-medium">Contact Us</Link></li>
            </ul>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 md:p-12 text-gray-600 dark:text-gray-300">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Legal;
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { submitContactMessage } from '../services/firebase';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await submitContactMessage({
        name,
        email,
        subject,
        message,
      });

      setShowSuccessModal(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setShowSuccessModal(false);
      }, 4000);
    } catch (err) {
      console.error(err);
      setErrorMessage('Failed to send. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="contact-header">
          <div className="section-tag">
            Direct Inquiries
          </div>
          <h2 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Open for internships, research collaborations, project discussions, and technical exchanges.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-subtitle">
              Whether you want to discuss a machine learning implementation, explore embedded IoT applications, or collaborate on music and tech, feel free to reach out.
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon" title="Location">
                {/* Authentic Google Maps Location Pin */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                    fill="#EA4335"
                  />
                  <circle cx="12" cy="9" r="3" fill="#FFFFFF" />
                  <circle cx="12" cy="9" r="1.5" fill="#C5221F" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-value">{PERSONAL_INFO.location}</div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon" title="Call or WhatsApp">
                {/* Authentic Phone Dialer Symbol */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="6" fill="#25D366" />
                  <path
                    d="M7 10.5C8 12.5 9.5 14 11.5 15L13 13.5C13.2 13.3 13.5 13.2 13.8 13.3C14.8 13.6 15.8 13.8 16.9 13.8C17.5 13.8 18 14.3 18 14.9V17C18 17.6 17.5 18 16.9 18C10.9 18 6 13.1 6 7.1C6 6.5 6.4 6 7 6H9.1C9.7 6 10.2 6.5 10.2 7.1C10.2 8.2 10.4 9.2 10.7 10.2C10.8 10.5 10.7 10.8 10.5 11L9 12.5"
                    stroke="#FFFFFF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Phone</div>
                <div className="contact-detail-value">
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}>
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon" title="Gmail">
                {/* Authentic Google Gmail Multi-Color Symbol */}
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4285F4" d="M3.5 6.5v11c0 .83.67 1.5 1.5 1.5h2.5V10.2L3.5 7.6V6.5z" />
                  <path fill="#34A853" d="M16.5 19H19c.83 0 1.5-.67 1.5-1.5v-11l-4 2.6V19z" />
                  <path fill="#EA4335" d="M16.5 5H15l-3 2.5L9 5H7.5c-1.38 0-2.5 1.12-2.5 2.5v.05l7 5.25 7-5.25V7.5c0-1.38-1.12-2.5-2.5-2.5z" />
                  <path fill="#FBBC04" d="M16.5 5H15v5.2l4-2.6V7.5c0-.41-.17-.79-.44-1.06A1.49 1.49 0 0016.5 5z" />
                  <path fill="#C5221F" d="M7.5 5H9v5.2L5 7.6V7.5c0-.41.17-.79.44-1.06A1.49 1.49 0 017.5 5z" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">
                  <a href={`mailto:${PERSONAL_INFO.email}`}>
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon social-icon--linkedin"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon social-icon--github"
                aria-label="GitHub"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon social-icon--instagram"
                aria-label="Instagram"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Jane Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. jane@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Project Collaboration / Opportunity"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Tell me about your project, idea, or questions..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending Message...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane" style={{ fontSize: '0.85rem' }}></i>
                  </>
                )}
              </button>
            </form>

            {errorMessage && (
              <div id="form-message" style={{ color: '#dc2626' }}>
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <div
        id="success-message"
        className={showSuccessModal ? 'visible' : ''}
        onClick={(e) => {
          if (e.target === e.currentTarget) setShowSuccessModal(false);
        }}
      >
        <div className="success-card">
          <div className="success-icon">
            <i className="fas fa-check"></i>
          </div>
          <h3 className="success-title">Message Received</h3>
          <p className="success-text">
            Thank you for reaching out. I will respond to your inquiry as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

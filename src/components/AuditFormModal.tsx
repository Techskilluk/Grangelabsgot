import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AuditFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  companyName: string;
  jobTitle: string;
  challenges: string[];
  teamSize: string;
  manualHours: string;
  priority: string;
  contact: string;
  workflow: string;
  currentTools: string;
  goals: string;
  otherChallenge: string;
  otherPriority: string;
}

export const AuditFormModal: React.FC<AuditFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    jobTitle: '',
    challenges: [],
    teamSize: '',
    manualHours: '',
    priority: '',
    contact: '',
    workflow: '',
    currentTools: '',
    goals: '',
    otherChallenge: '',
    otherPriority: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Prepare data for Supabase
      const challenges = [
        ...formData.challenges,
        ...(formData.otherChallenge ? [formData.otherChallenge] : [])
      ].filter(Boolean);

      const priority = formData.priority === 'other' ? formData.otherPriority : formData.priority;

      // Save to Supabase
      const { error: supabaseError } = await supabase
        .from('audit_submissions')
        .insert({
          company_name: formData.companyName,
          job_title: formData.jobTitle,
          challenges,
          team_size: formData.teamSize,
          manual_hours: formData.manualHours,
          priority,
          contact: formData.contact,
          workflow: formData.workflow || null,
          current_tools: formData.currentTools || null,
          goals: formData.goals || null
        });

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        throw new Error('Failed to save submission');
      }

      setShowThankYou(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(
        'There was an error submitting your assessment. Please try again or contact support if the issue persists.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      challenges: checked 
        ? [...prev.challenges, value]
        : prev.challenges.filter(challenge => challenge !== value)
    }));
  };

  if (!isOpen) return null;

  if (showThankYou) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-black/90 border border-indigo-500/20 rounded-2xl max-w-xl w-full p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
            <p className="text-gray-300 mb-6">
              We've received your responses. Our team will analyze them and send you a quick, personalized report on key automation opportunities. Keep an eye on your inbox—one of our AI specialists will also be in touch for a free consultation if you're interested!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-indigo-500/20 rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">AI Automation Audit: Quick Assessment</h2>

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg text-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company / Organization Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-black/40 border border-indigo-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Job Title or Role
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-black/40 border border-indigo-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Challenges */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Current Biggest Challenge (Select one or more)
            </label>
            <div className="space-y-2">
              {[
                'Sales Leads & Follow-Up',
                'Customer Support & Ticket Handling',
                'Data Entry & Document Processing',
                'Operations / Workflow Bottlenecks'
              ].map(challenge => (
                <div key={challenge} className="flex items-center">
                  <input
                    type="checkbox"
                    value={challenge}
                    checked={formData.challenges.includes(challenge)}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label className="ml-2 text-gray-300">{challenge}</label>
                </div>
              ))}
              <div className="mt-2">
                <input
                  type="text"
                  name="otherChallenge"
                  placeholder="Other (please specify)"
                  value={formData.otherChallenge}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-black/40 border border-indigo-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Team Size */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Approximate Team Size
            </label>
            <select
              name="teamSize"
              value={formData.teamSize}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-black/40 border border-indigo-500/20 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select team size</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201+">201+</option>
            </select>
          </div>

          {/* Manual Hours */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Estimate How Many Hours per Week Are Spent on Manual / Repetitive Tasks
            </label>
            <select
              name="manualHours"
              value={formData.manualHours}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-black/40 border border-indigo-500/20 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select hours range</option>
              <option value="<5">Less than 5</option>
              <option value="5-10">5-10</option>
              <option value="10-20">10-20</option>
              <option value="20+">20+</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Top Priority for Improvement
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-black/40 border border-indigo-500/20 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select priority</option>
              <option value="response-times">Speeding Up Response Times</option>
              <option value="costs">Reducing Operational Costs</option>
              <option value="staff-time">Freeing Staff for Higher-Value Work</option>
              <option value="accuracy">Improving Data Accuracy</option>
              <option value="other">Other</option>
            </select>
            {formData.priority === 'other' && (
              <input
                type="text"
                name="otherPriority"
                placeholder="Please specify"
                value={formData.otherPriority}
                onChange={handleInputChange}
                className="mt-2 w-full px-4 py-2 bg-black/40 border border-indigo-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              />
            )}
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Best Contact Email / Phone
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-black/40 border border-indigo-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Optional Questions */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Optional Additional Questions</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Describe a Typical Customer Support or Sales Interaction Workflow
              </label>
              <textarea
                name="workflow"
                value={formData.workflow}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-black/40 border border-indigo-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Are You Currently Using Any Automation Tools?
              </label>
              <input
                type="text"
                name="currentTools"
                value={formData.currentTools}
                onChange={handleInputChange}
                placeholder="If yes, please specify"
                className="w-full px-4 py-2 bg-black/40 border border-indigo-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Any Specific AI or Automation Goals?
              </label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-black/40 border border-indigo-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                rows={3}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
              isSubmitting 
                ? 'opacity-75 cursor-not-allowed'
                : 'hover:bg-indigo-500'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              'Submit Assessment'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
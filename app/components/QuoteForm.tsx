"use client";

import { useState } from "react";
import { Button } from "@/app/ui/buttons/Button";
import { Input } from "@/app/components/Input";
import { TextArea } from "@/app/components/TextArea";

interface QuoteFormProps {
  locale?: string;
  onSuccess?: () => void;
}

export function QuoteForm({ locale, onSuccess }: QuoteFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickupCity: "",
    dropoffCity: "",
    date: "",
    time: "",
    notes: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }
    
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (!formData.pickupCity || formData.pickupCity.trim().length < 2) {
      newErrors.pickupCity = "Please enter a pickup location.";
    }
    
    if (!formData.dropoffCity || formData.dropoffCity.trim().length < 2) {
      newErrors.dropoffCity = "Please enter a dropoff location.";
    }
    
    if (!formData.date) {
      newErrors.date = "Please select a date.";
    }
    
    if (!formData.time) {
      newErrors.time = "Please select a time.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSubmitting(true);
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setFormData({
            name: "",
            email: "",
            pickupCity: "",
            dropoffCity: "",
            date: "",
            time: "",
            notes: ""
          });
          setErrors({});
          if (onSuccess) onSuccess();
        }, 5000);
      } else {
        setErrors({ submit: data.error || 'Failed to submit quote request' });
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (success) {
    return (
      <div className="rounded-lg p-6 bg-[var(--surface)] border border-[var(--border)] shadow-sm flex flex-col items-center justify-center text-center gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-2">
            {formData.name && formData.name.trim().split(" ")[0]
              ? `Thank you, ${formData.name.trim().split(" ")[0]}!`
              : "Thank you!"}
          </h2>
          <p className="text-base text-[var(--textMuted)] mb-2">
            Your request has been sent successfully.<br />
            <br />
            Please check your inbox for a confirmation email.<br />
            If you don’t see it, your email address may be incorrect or the message may be in your spam folder.<br />
            <br />
            If you received the confirmation, a member of our team will get back to you shortly.
          </p>
        </div>
        <Button variant="primary" type="button" onClick={() => setSuccess(false)}>
          Back
        </Button>
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg p-6 bg-[var(--surface)] border border-[var(--border)] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div className="md:col-span-2">
        <Input
          label="Full Name"
          placeholder="John Doe"
          required
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={errors.name}
          autoFocus
        />
      </div>
      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        required
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        error={errors.email}
      />
      <Input
        label="Phone (Optional)"
        type="tel"
        placeholder="(503) 555-0123"
      />
      <Input
        label="Pickup Address or Airport Name"
        placeholder="PDX Airport or 123 Main St, Portland"
        required
        value={formData.pickupCity}
        onChange={(e) => handleChange('pickupCity', e.target.value)}
        error={errors.pickupCity}
      />
      <Input
        label="Dropoff Address or Airport Name"
        placeholder="Hotel address or airport name"
        required
        value={formData.dropoffCity}
        onChange={(e) => handleChange('dropoffCity', e.target.value)}
        error={errors.dropoffCity}
      />
      <Input
        label="Date"
        type="date"
        required
        value={formData.date}
        onChange={(e) => handleChange('date', e.target.value)}
        error={errors.date}
      />
      <Input
        label="Time"
        type="time"
        required
        value={formData.time}
        onChange={(e) => handleChange('time', e.target.value)}
        error={errors.time}
      />
      <div className="md:col-span-2">
        <TextArea
          label="Notes / Special Requests"
          placeholder="Any special requirements or preferences..."
          rows={3}
          value={formData.notes}
          onChange={(e) => handleChange('notes', e.target.value)}
        />
      </div>
      {errors.submit && (
        <div className="md:col-span-2 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {errors.submit}
        </div>
      )}
      <div className="md:col-span-2 flex justify-end mt-2">
        <Button variant="primary" type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Request a Quote"}
        </Button>
      </div>
    </form>
  );
}

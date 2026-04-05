"use client";

import { useEffect, useRef, useState } from "react";
import { User, Phone, Calendar, Users, BedDouble, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function BookingForm() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "1",
    roomType: "standard",
  });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, "")))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.checkin) newErrors.checkin = "Check-in date is required";
    if (!formData.checkout) newErrors.checkout = "Check-out date is required";
    if (formData.checkin && formData.checkout && formData.checkout <= formData.checkin)
      newErrors.checkout = "Check-out must be after check-in";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          checkin: "",
          checkout: "",
          guests: "1",
          roomType: "standard",
        });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Get tomorrow's date for minimum check-in
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" ref={sectionRef} className="section-padding bg-cream">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Reservation
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-brown-dark mb-4">
            Book Your Stay
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto">
            Fill out the form below and we&apos;ll confirm your booking within 30
            minutes via phone call.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mt-4" />
        </div>

        {/* Form */}
        <div className="animate-on-scroll">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-cream-dark/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-brown-dark mb-2">
                  <User size={16} className="text-gold-dark" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? "border-red-400 bg-red-50/50" : "border-cream-dark/30 bg-cream/30"
                  } focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-brown-dark placeholder:text-warm-gray-light`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-brown-dark mb-2">
                  <Phone size={16} className="text-gold-dark" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit number"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phone ? "border-red-400 bg-red-50/50" : "border-cream-dark/30 bg-cream/30"
                  } focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-brown-dark placeholder:text-warm-gray-light`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Check-in */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-brown-dark mb-2">
                  <Calendar size={16} className="text-gold-dark" />
                  Check-in Date
                </label>
                <input
                  type="date"
                  name="checkin"
                  value={formData.checkin}
                  onChange={handleChange}
                  min={today}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.checkin ? "border-red-400 bg-red-50/50" : "border-cream-dark/30 bg-cream/30"
                  } focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-brown-dark`}
                />
                {errors.checkin && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.checkin}
                  </p>
                )}
              </div>

              {/* Check-out */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-brown-dark mb-2">
                  <Calendar size={16} className="text-gold-dark" />
                  Check-out Date
                </label>
                <input
                  type="date"
                  name="checkout"
                  value={formData.checkout}
                  onChange={handleChange}
                  min={formData.checkin || today}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.checkout ? "border-red-400 bg-red-50/50" : "border-cream-dark/30 bg-cream/30"
                  } focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-brown-dark`}
                />
                {errors.checkout && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.checkout}
                  </p>
                )}
              </div>

              {/* Guests */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-brown-dark mb-2">
                  <Users size={16} className="text-gold-dark" />
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-cream-dark/30 bg-cream/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-brown-dark"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Type */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-brown-dark mb-2">
                  <BedDouble size={16} className="text-gold-dark" />
                  Room Type
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-cream-dark/30 bg-cream/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-brown-dark"
                >
                  <option value="standard">Standard Room — ₹800/night</option>
                  <option value="deluxe">Deluxe Room — ₹1,200/night</option>
                  <option value="family">Family Suite — ₹1,500/night</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                "Confirm Booking Request"
              )}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3 animate-[slide-up_0.3s_ease-out_forwards]">
                <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-medium text-sm">
                    Booking Request Submitted!
                  </p>
                  <p className="text-green-600 text-xs mt-0.5">
                    We&apos;ll call you within 30 minutes to confirm your reservation.
                  </p>
                </div>
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 animate-[slide-up_0.3s_ease-out_forwards]">
                <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-medium text-sm">
                    Something went wrong
                  </p>
                  <p className="text-red-600 text-xs mt-0.5">
                    Please try again or call us directly at +91 98765 43210.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, phone, checkin, checkout, guests, roomType } = body;

    // Validate required fields
    if (!name || !phone || !checkin || !checkout) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate phone number (Indian format)
    const cleanPhone = phone.replace(/\s/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    // Validate dates
    if (new Date(checkout) <= new Date(checkin)) {
      return NextResponse.json(
        { error: "Check-out must be after check-in" },
        { status: 400 }
      );
    }

    // Log booking (in production, save to DB or send email)
    console.log("📋 New Booking Request:", {
      name,
      phone: cleanPhone,
      checkin,
      checkout,
      guests: guests || 1,
      roomType: roomType || "standard",
      timestamp: new Date().toISOString(),
    });

    // Mock success response
    // In production, integrate with:
    // - Nodemailer / Resend for email notifications
    // - Database (MongoDB, PostgreSQL) for persistence
    // - SMS API for confirmation messages

    return NextResponse.json(
      {
        success: true,
        message: "Booking request received! We will contact you shortly.",
        bookingId: `SHV-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const serviceId = searchParams.get("serviceId") || "konseling";
  const dateStr = searchParams.get("date") || new Date().toISOString().split("T")[0];

  const availableSlots = [
    { time: "09:00", available: true },
    { time: "10:30", available: true },
    { time: "13:00", available: false },
    { time: "14:30", available: true },
    { time: "16:00", available: true },
    { time: "19:00", available: true },
  ];

  return NextResponse.json({
    date: dateStr,
    serviceId,
    timezone: "WIB",
    slots: availableSlots,
  });
}

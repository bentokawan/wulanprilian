import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      serviceId,
      mode,
      date,
      time,
      clientAlias,
      clientEmail,
      clientPhone,
      consentPrivacy,
      consentTerms,
      consentRefund,
    } = body;

    if (!serviceId || !date || !time || !clientAlias || !clientEmail) {
      return NextResponse.json(
        { error: "Semua kolom wajib harus diisi." },
        { status: 400 }
      );
    }

    if (!consentPrivacy || !consentTerms || !consentRefund) {
      return NextResponse.json(
        { error: "Persetujuan privasi, ketentuan, dan refund wajib dicentang." },
        { status: 400 }
      );
    }

    const bookingId = `bk_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const accessToken = `tok_${Math.random().toString(36).substring(2, 12)}`;
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();

    return NextResponse.json({
      success: true,
      booking: {
        id: bookingId,
        serviceId,
        mode: mode || "online",
        date,
        time,
        timezone: "WIB",
        clientAlias,
        clientEmail,
        clientPhone,
        status: "menunggu_bayar",
        holdExpiresAt: expiresAt,
        accessToken,
      },
      payment: {
        provider: "mayar",
        invoiceId: `inv_${bookingId}`,
        invoiceUrl: `/booking/status?token=${accessToken}&mockPay=1`,
        amount: serviceId === "hipnoterapi" ? 450000 : 350000,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Gagal memuat booking. Coba lagi nanti." },
      { status: 500 }
    );
  }
}

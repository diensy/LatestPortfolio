import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Function to get/update download count
async function incrementDownloadCount() {
  const file = path.join(process.cwd(), "downloads.json");
  let count = 0;
  
  try {
    // Try to read existing count
    const data = await fs.readFile(file, "utf8");
    const json = JSON.parse(data);
    count = typeof json.count === "number" ? json.count : 0;
  } catch (error) {
    // File doesn't exist yet or is invalid, start at 0
  }
  
  // Increment and save
  count += 1;
  await fs.writeFile(file, JSON.stringify({ count, lastDownloadedAt: new Date().toISOString() }));
  
  return count;
}

export async function GET() {
  try {
    // 1. Increment local counter (for demo purposes)
    const count = await incrementDownloadCount();
    console.log(`Resume downloaded! Total downloads: ${count}`);

    // 2. Resolve the path to the PDF
    const pdfPath = path.join(process.cwd(), "public", "Dincesh_kumar_sahoo.pdf");

    // 3. Check if file exists
    try {
      await fs.access(pdfPath);
    } catch {
      return NextResponse.json({ error: "Resume file not found. Please add public/Dincesh_kumar_sahoo.pdf" }, { status: 404 });
    }

    // 4. Read file and send as downloadable attachment
    const pdfBuffer = await fs.readFile(pdfPath);
    
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Dinesh_Kumar_Sahoo_Resume.pdf"`,
      },
    });
  } catch (error) {
    console.error("Resume download error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

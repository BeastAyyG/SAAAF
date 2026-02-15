import ClientHome from "./client-home";
import { createClient } from "@/lib/supabase-server";
import type { Report } from "@/lib/types";
import { MOCK_REPORTS } from "@/lib/demo-data";

export const revalidate = 0; // Disable cache for real-time feel
export const dynamic = "force-dynamic";

// DEMO MODE: Set to true to use mock data for demo purposes
const DEMO_MODE = true; // Enable demo mode with mock data

export default async function Home() {
  // Use demo data if DEMO_MODE is enabled
  if (DEMO_MODE) {
    // Convert mock reports to match the Report type
    const demoReports: Report[] = MOCK_REPORTS.map(report => ({
      id: report.id,
      category: report.category,
      severity: report.severity_score,
      description: report.description,
      lat: report.latitude,
      lng: report.longitude,
      image_url: report.image_url,
      status: report.status.toUpperCase() as "OPEN" | "IN_PROGRESS" | "RESOLVED",
      upvotes: report.upvotes,
      created_at: report.created_at,
      user_id: report.user_id,
      image_hash: null,
      officer_id: null,
      priority: "NORMAL"
    }));
    return <ClientHome reports={demoReports} />;
  }

  // Fetch Real Data from Supabase
  const supabase = createClient();
  let reports: Report[] = [];

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("reports")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50); // Reasonable limit for initial load

      if (error) {
        console.error("Error fetching reports:", error.message);
      } else if (data) {
        reports = data as Report[];
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  }

  // Fallback to demo data if no reports found
  if (reports.length === 0) {
    const demoReports: Report[] = MOCK_REPORTS.map(report => ({
      id: report.id,
      category: report.category,
      severity: report.severity_score,
      description: report.description,
      lat: report.latitude,
      lng: report.longitude,
      image_url: report.image_url,
      status: report.status.toUpperCase() as "OPEN" | "IN_PROGRESS" | "RESOLVED",
      upvotes: report.upvotes,
      created_at: report.created_at,
      user_id: report.user_id,
      image_hash: null,
      officer_id: null,
      priority: "NORMAL"
    }));
    return <ClientHome reports={demoReports} />;
  }

  return <ClientHome reports={reports} />;
}

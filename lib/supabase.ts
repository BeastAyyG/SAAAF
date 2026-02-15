import { createClient } from "@supabase/supabase-js";
import { MOCK_REPORTS, MOCK_UPDATES } from "./demo-data"; // Assuming demo-data.ts exists now

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// DEMO MOCK CLIENT IMPLEMENTATION
// This allows the app to run perfectly even without Supabase keys
const mockSupabase = {
    auth: {
        getUser: async () => ({
            data: {
                user: {
                    id: "demo-user",
                    email: "demo@saaaf.app",
                    user_metadata: { full_name: "Demo Citizen" }
                }
            },
            error: null
        }),
        getSession: async () => ({
            data: { session: { user: { id: "demo-user" } } },
            error: null
        }),
        signInWithPassword: async () => ({ data: { user: {} }, error: null }),
        signOut: async () => ({ error: null }),
    },
    from: (table: string) => {
        return {
            select: (columns: string = "*") => {
                const chain = {
                    eq: (col: string, val: any) => chain,
                    order: (col: string, opts: any) => chain,
                    limit: (n: number) => chain,
                    single: async () => {
                        if (table === 'profiles') return {
                            data: { id: "demo-user", full_name: "Demo Citizen", karma_points: 150, role: "citizen" },
                            error: null
                        };
                        return { data: MOCK_REPORTS[0], error: null };
                    },
                    then: (resolve: any) => {
                        if (table === 'reports') resolve({ data: MOCK_REPORTS, error: null });
                        else if (table === 'report_updates') resolve({ data: MOCK_UPDATES, error: null });
                        else resolve({ data: [], error: null });
                    }
                };
                return chain;
            },
            insert: async (data: any) => {
                console.log(`[MOCK DB] Inserted into ${table}:`, data);
                return { data: [data], error: null };
            },
            update: (data: any) => ({
                eq: async (col: string, val: any) => {
                    console.log(`[MOCK DB] Updated ${table} where ${col}=${val}:`, data);
                    return { data: [data], error: null };
                }
            }),
            upload: async () => ({ data: { path: "mock-path.jpg" }, error: null }),
            getPublicUrl: () => ({ data: { publicUrl: "https://via.placeholder.com/400" } })
        };
    },
    storage: {
        from: (bucket: string) => ({
            upload: async () => ({ data: { path: "mock-upload.jpg" }, error: null }),
            getPublicUrl: () => ({ data: { publicUrl: "https://via.placeholder.com/400" } })
        })
    }
};

const isValidUrl = (url: string) => {
    try { return new URL(url).protocol.startsWith("http"); }
    catch { return false; }
};

// Return Real Client if keys exist, otherwise Magic Mock Client
export const supabase = (supabaseUrl && isValidUrl(supabaseUrl) && supabaseKey)
    ? createClient(supabaseUrl, supabaseKey)
    : mockSupabase as any; // Cast as any to bypass strict type checks for the mock

import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";
import {NextResponse} from "next/server";

export async function POST(req: Request) {
    try {
        const { companionId } = await req.json();
        
        if (!companionId) {
            return NextResponse.json(
                { error: "Companion ID is required" },
                { status: 400 }
            );
        }

        const { userId } = await auth();
        
        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const supabase = createSupabaseClient();
        const { data, error } = await supabase.from('session_history')
            .insert({
                companion_id: companionId,
                user_id: userId,
            });

        if (error) {
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("[SESSION_HISTORY_ERROR]", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
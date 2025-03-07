import { SignUp } from '@clerk/nextjs';

export default function Page() {
    return (
        <div className="px-4 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/30">
                <SignUp 
                    forceRedirectUrl="/subscribe"
                    appearance={{
                        elements: {
                            rootBox: "w-full",
                            card: "bg-transparent shadow-none",
                            headerTitle: "text-white",
                            headerSubtitle: "text-white/80",
                            formFieldLabel: "text-white/80",
                            socialButtons: "text-white",
                            dividerText: "text-white/70",
                            footerActionText: "text-white/70",
                            formButtonPrimary: "bg-white/20 hover:bg-white/30 text-white border border-white/30",
                        }
                    }}
                />
            </div>
        </div>
    );
}
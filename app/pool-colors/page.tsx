import { Metadata } from "next";
import ColorFinishPicker from "../components/ColorFinishPicker";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Pool Color Finishes | SK Pool - Canadian Made Swimming Pools",
  description:
    "Explore our premium Crystite Classic and Crystal pool finishes. Choose from Ocean Blue, Sapphire Blue, Night Sky, and more stunning colors for your fiberglass pool.",
};

const PoolColorsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Color Picker Component */}
      <ColorFinishPicker showHeader={true} />

      {/* Additional Info Section */}
      <section className="bg-white py-16 lg:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                UV Resistant
              </h3>
              <p className="text-slate-600 leading-relaxed">
                All Crystite finishes are engineered with advanced UV protection
                to maintain their vibrant color for years, even under the
                Canadian sun.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Lifetime Warranty
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our finishes come with a comprehensive warranty, giving you
                peace of mind that your investment is protected for the long
                term.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Easy Maintenance
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The smooth gelcoat surface resists algae and staining, making
                your pool easier to clean and maintain throughout the seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PoolColorsPage;


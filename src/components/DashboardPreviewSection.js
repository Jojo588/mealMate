import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Calendar, TrendingDown, Smartphone, Monitor } from "lucide-react";
import { differenceInCalendarDays } from "date-fns";

function DashboardPreviewSection({
  foodItems,
  recipes,
}) {
  // Sort items by expiryDate ascending
  const sortedItems = [...foodItems].sort((a, b) =>
    new Date(a.expiryDate) - new Date(b.expiryDate)
  );

  const soonestItem = sortedItems[0];

  const getExpiryStatus = (expiryDate) => {
    const today = new Date();
    const daysLeft = differenceInCalendarDays(new Date(expiryDate), today);


    if (daysLeft < 0) {
      return { label: "is expired", badge: <Badge variant="destructive">Expired</Badge>, bg: "bg-red-200", text: "text-red-600" };
    } 
    else if (daysLeft == 0) {
      return { label: "Expires today", badge: <Badge variant="destructive">Urgent</Badge>, bg: "bg-red-50", text: "text-red-600" };
    } 
    else if (daysLeft === 1) {
      return { label: "1 day left", badge: <Badge className="bg-yellow-500 text-white">Soon</Badge>, bg: "bg-yellow-50", text: "text-yellow-600" };
    } else if (daysLeft <= 3) {
      return { label: `${daysLeft} days left`, badge: <Badge className="bg-yellow-500 text-white">Soon</Badge>, bg: "bg-yellow-50", text: "text-yellow-600" };
    } else {
      return { label: `Expires in ${daysLeft} days`, badge: null, bg: "", text: "text-[#666666]" };
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333]">
            Your Personal <span className="text-[#A3B18A]">Food Management</span> Dashboard
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Track your progress, view analytics, and manage your food inventory from any device.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Monitor className="h-5 w-5 text-[#A3B18A]" />
                <span className="font-medium text-[#333333]">Desktop</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-[#FFB703]" />
                <span className="font-medium text-[#333333]">Mobile</span>
              </div>
            </div>

            <div className="grid gap-6">

              <Card className="border-2 border-[#FFB703]/20 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-[#333333]">Expiry Calendar</span>
                    <Calendar className="h-5 w-5 text-[#FFB703]" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 h-36 overflow-auto">
                  {sortedItems.length === 0 ? (
                    <p className="text-sm text-[#666666]">No food items added yet.</p>
                  ) : (
                    sortedItems.slice(0, 3).map((item, index) => {
                      const status = getExpiryStatus(item.expiryDate);
                      return (
                        <div
                          key={index}
                          className={`flex items-center justify-between p-3 ${status.bg} rounded-lg`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="text-xl">{item.emoji || "🍽️"}</div>
                            <div>
                              <p className="font-medium text-[#333333]">{item.itemName}</p>
                              <p className={`text-sm ${status.text}`}>{status.label}</p>
                            </div>
                          </div>
                          {status.badge}
                        </div>
                      );
                    })
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#A3B18A]/10 to-[#FFB703]/10 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-[#333333]">Quick Stats</h3>
                  <Badge className="bg-[#A3B18A] text-white">Live</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#FAF9F6] rounded-lg">
                    <div className="text-3xl font-bold text-[#A3B18A]">{foodItems.length}</div>
                    <div className="text-sm text-[#666666]">Items tracked</div>
                  </div>
                  <div className="text-center p-4 bg-[#FAF9F6] rounded-lg">
                    <div className="text-3xl font-bold text-[#FFB703]">{recipes.length}</div>
                    <div className="text-sm text-[#666666]">Recipes found</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-[#333333]">Recent Activity</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-[#666666]">
                        Added {foodItems.length > 0 ? foodItems[foodItems.length - 1].itemName : "No items yet"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-[#666666]">Found {recipes.length} new recipes</span>
                    </div>
                    {soonestItem && (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-[#666666]">
                          {soonestItem.itemName} {getExpiryStatus(soonestItem.expiryDate).label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreviewSection;

export const plans = {
  free: {
    name: "Free",
    passageLimit: 3,
    features: [
      "Starter CARS passages",
      "Timed exam interface",
      "Basic review screen"
    ]
  },
  premium: {
    name: "Premium",
    passageLimit: "Unlimited",
    price: "$9.99/month",
    features: [
      "Unlimited passages",
      "Saved attempt history",
      "Question-type analytics",
      "Admin-added content",
      "Future AI tutor tools"
    ]
  }
};

export function userHasPremium(profile) {
  return profile?.plan === "premium";
}

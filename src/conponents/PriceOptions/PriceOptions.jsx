import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const options = [
        {
          id: 1,
          name: "Basic Membership",
          price: 20,
          features: [
            "Access to gym facilities",
            "Free Wi-Fi",
            "Locker room access",
            "One complimentary guest pass per month"
          ],
          isFeatured: false
        },
        {
          id: 2,
          name: "Standard Membership",
          price: 35,
          features: [
            "Access to gym facilities",
            "Group classes",
            "Free Wi-Fi",
            "Locker room access",
            "One complimentary guest pass per month",
            "10% discount on merchandise"
          ],
          isFeatured: false
        },
        {
          id: 3,
          name: "Premium Membership",
          price: 50,
          features: [
            "Access to gym facilities",
            "Group classes",
            "Personal trainer (2 sessions per month)",
            "Free Wi-Fi",
            "Access to pool and sauna",
            "Locker room with premium toiletries",
            "Two complimentary guest passes per month",
            "15% discount on merchandise and services"
          ],
          isFeatured: true
        },
        {
          id: 4,
          name: "Elite Membership",
          price: 75,
          features: [
            "Unlimited access to all facilities",
            "Unlimited group classes",
            "Personal trainer (4 sessions per month)",
            "Diet consultation",
            "Access to pool, sauna, and spa",
            "Free Wi-Fi",
            "VIP locker room with private showers",
            "Unlimited guest passes",
            "20% discount on merchandise and services",
            "Priority class booking",
            "Access to exclusive workshops and events"
          ],
          isFeatured: true
        }
      ];
    return (
        <div className="m-12">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
      {
        options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
      </div>
    </div>
    );
};

export default PriceOptions;
export interface IFilter {
  columnName: string;
  choices: { name: string, enabled: boolean }[];
}

export const filters: IFilter[] = [
  {
    columnName: 'Meal & Course', choices: [
      { name: 'Appetizer', enabled: false },
      { name: 'Dinner', enabled: false },
      { name: 'Breakfast', enabled: false },
      { name: 'Lunch', enabled: false },
      { name: 'Side', enabled: false },
      { name: 'Brunch', enabled: false },
      { name: 'Dessert', enabled: false },
      { name: 'Buffet', enabled: false }
    ]
  },
  {
    columnName: 'Dish Type', choices: [
      { name: 'Aperitif', enabled: false },
      { name: 'Biscuit', enabled: false },
      { name: 'Bread', enabled: false },
      { name: 'Brownie', enabled: false },
      { name: 'Burrito', enabled: false },
      { name: 'Cake', enabled: false },
      { name: 'Candy', enabled: false },
      { name: 'Casserole/Gratin', enabled: false },
      { name: 'Cheesecake', enabled: false },
      { name: 'Chili', enabled: false },
      { name: 'Chowder', enabled: false },
      { name: 'Cobbler/Crumble', enabled: false },
      { name: 'Cocktail', enabled: false },
      { name: 'Condiment/Spread', enabled: false },
      { name: 'Cookie', enabled: false },
      { name: 'Cranberry Sauce', enabled: false },
      { name: 'Crêpe', enabled: false },
      { name: 'Cupcake', enabled: false },
      { name: 'Custard', enabled: false },
      { name: 'Digestif', enabled: false },
      { name: 'Dip', enabled: false },
      { name: 'Edible Gift', enabled: false },
      { name: 'Flat Bread', enabled: false },
      { name: 'Frittata', enabled: false },
      { name: 'Fritter', enabled: false },
      { name: 'Frozen Dessert', enabled: false },
      { name: 'Guacamole', enabled: false },
      { name: 'Hamburger', enabled: false },
      { name: 'Ice Cream', enabled: false },
      { name: 'Iced Tea', enabled: false },
      { name: 'Margarita', enabled: false },
      { name: 'Martini', enabled: false },
      { name: 'Pastry', enabled: false },
      { name: 'Salad', enabled: false },
      { name: 'Salad Dressing', enabled: false },
      { name: 'Sandwich', enabled: false },
      { name: 'Sangria', enabled: false },
      { name: 'Sauce', enabled: false },
      { name: 'Soup/Stew', enabled: false },
      { name: 'Stuffing/Dressing', enabled: false }
    ]
  },
  {
    columnName: 'Dietary Concerns', choices: [
      { name: 'Healthy', enabled: false },
      { name: 'High Fiber', enabled: false },
      { name: 'Kid Friendly', enabled: false },
      { name: 'Kosher', enabled: false },
      { name: 'Kosher for Passover', enabled: false },
      { name: 'Low Cholesterol', enabled: false },
      { name: 'Low Fat', enabled: false },
      { name: 'Low Sodium', enabled: false },
      { name: 'Low/No Sugar', enabled: false },
      { name: 'Organic', enabled: false },
      { name: 'Quick & Easy', enabled: false },
      { name: 'Raw', enabled: false },
      { name: 'Vegan', enabled: false },
      { name: 'Vegetarian', enabled: false },
      { name: 'Wheat/Gluten-Free', enabled: false }
    ]
  },
  {
    columnName: 'Ingredients', choices: [
      { name: 'Apple', enabled: false },
      { name: 'Bean', enabled: false },
      { name: 'Beef', enabled: false },
      { name: 'Broccoli', enabled: false },
      { name: 'Cabbage', enabled: false },
      { name: 'Carrot', enabled: false },
      { name: 'Chicken', enabled: false },
      { name: 'Chocolate', enabled: false },
      { name: 'Citrus', enabled: false },
      { name: 'Cranberry', enabled: false },
      { name: 'Duck', enabled: false },
      { name: 'Egg', enabled: false },
      { name: 'Eggplant', enabled: false },
      { name: 'Fish', enabled: false },
      { name: 'Fruit', enabled: false },
      { name: 'Green Bean', enabled: false },
      { name: 'Ground Beef', enabled: false },
      { name: 'Ham', enabled: false },
      { name: 'Kale', enabled: false },
      { name: 'Lamb', enabled: false },
      { name: 'Leafy Green', enabled: false },
      { name: 'Lemon', enabled: false },
      { name: 'Mushroom', enabled: false },
      { name: 'Pasta', enabled: false },
      { name: 'Pork', enabled: false },
      { name: 'Potato', enabled: false },
      { name: 'Poultry', enabled: false },
      { name: 'Rice', enabled: false },
      { name: 'Salmon', enabled: false },
      { name: 'Scallop', enabled: false },
      { name: 'Seafood', enabled: false },
      { name: 'Shellfish', enabled: false },
      { name: 'Shrimp', enabled: false },
      { name: 'Spinach', enabled: false },
      { name: 'Sweet Potato', enabled: false },
      { name: 'Tomato', enabled: false },
      { name: 'Turkey', enabled: false },
      { name: 'Vegetable', enabled: false },
      { name: 'Zucchini', enabled: false }
    ]
  },
  {
    columnName: 'Cuisine', choices: [
      { name: 'African', enabled: false },
      { name: 'American', enabled: false },
      { name: 'Asian', enabled: false },
      { name: 'British', enabled: false },
      { name: 'Cajun/Creole', enabled: false },
      { name: 'Californian', enabled: false },
      { name: 'Caribbean', enabled: false },
      { name: 'Central/S. American', enabled: false },
      { name: 'Chinese', enabled: false },
      { name: 'Cuban', enabled: false },
      { name: 'Eastern European', enabled: false },
      { name: 'English', enabled: false },
      { name: 'European', enabled: false },
      { name: 'French', enabled: false },
      { name: 'German', enabled: false },
      { name: 'Greek', enabled: false },
      { name: 'Indian', enabled: false },
      { name: 'Irish', enabled: false },
      { name: 'Italian', enabled: false },
      { name: 'Italian American', enabled: false },
      { name: 'Japanese', enabled: false },
      { name: 'Jewish', enabled: false },
      { name: 'Korean', enabled: false },
      { name: 'Latin American', enabled: false },
      { name: 'Mediterranean', enabled: false },
      { name: 'Mexican', enabled: false },
      { name: 'Middle Eastern', enabled: false },
      { name: 'Moroccan', enabled: false },
      { name: 'Nuevo Latino', enabled: false },
      { name: 'Scandinavian', enabled: false },
      { name: 'South American', enabled: false },
      { name: 'South Asian', enabled: false },
      { name: 'Southeast Asian', enabled: false },
      { name: 'Southern', enabled: false },
      { name: 'Southwestern', enabled: false },
      { name: 'Spanish/Portuguese', enabled: false },
      { name: 'Tex-Mex', enabled: false },
      { name: 'Thai', enabled: false },
      { name: 'Turkish', enabled: false },
      { name: 'Vietnamese', enabled: false }
    ]
  },
  {
    columnName: 'Technique', choices: [
      { name: 'Advance Prep Req\'d', enabled: false },
      { name: 'Bake', enabled: false },
      { name: 'Barbecue', enabled: false },
      { name: 'Boil', enabled: false },
      { name: 'Braise', enabled: false },
      { name: 'Brine', enabled: false },
      { name: 'Broil', enabled: false },
      { name: 'Chill', enabled: false },
      { name: 'Deep Fry', enabled: false },
      { name: 'Freeze', enabled: false },
      { name: 'Fry', enabled: false },
      { name: 'Marinate', enabled: false },
      { name: 'No-Cook', enabled: false },
      { name: 'Pan-Fry', enabled: false },
      { name: 'Poach', enabled: false },
      { name: 'Roast', enabled: false },
      { name: 'Sauté', enabled: false },
      { name: 'Simmer', enabled: false },
      { name: 'Steam', enabled: false },
      { name: 'Stew', enabled: false },
      { name: 'Stir-Fry', enabled: false }
    ]
  }
];
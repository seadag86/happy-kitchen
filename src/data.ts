export interface IFilter {
  columnName: string;
  type: string,
  choices: IFilterChoice[];
}

export interface IFilterChoice {
  name: string,
  value: string,
  enabled: boolean;
}

export const filters: IFilter[] = [
  {
    columnName: 'Meal & Course', type: 'mealType', choices: [
      { name: 'Breakfast', value: 'Breakfast', enabled: false },
      { name: 'Lunch', value: 'Lunch', enabled: false },
      { name: 'Dinner', value: 'Dinner', enabled: false },
      { name: 'Snack', value: 'Snack', enabled: false },
    ]
  },
  {
    columnName: 'Dish Type', type: 'dishType', choices: [
      { name: 'Bread', value: 'Bread', enabled: false },
      { name: 'Cereals', value: 'Cereals', enabled: false },
      { name: 'Condiments and sauces', value: 'Condiments and sauces', enabled: false },
      { name: 'Drinks', value: 'Drinks', enabled: false },
      { name: 'Desserts', value: 'Desserts', enabled: false },
      { name: 'Main course', value: 'Main course', enabled: false },
      { name: 'Pancake', value: 'Pancake', enabled: false },
      { name: 'Preps', value: 'Preps', enabled: false },
      { name: 'Preserve', value: 'Preserve', enabled: false },
      { name: 'Salad', value: 'Salad', enabled: false },
      { name: 'Sandwiches', value: 'Sandwiches', enabled: false },
      { name: 'Side dish', value: 'Side dish', enabled: false },
      { name: 'Soup', value: 'Soup', enabled: false },
      { name: 'Starter', value: 'Starter', enabled: false },
      { name: 'Sweets', value: 'Sweets', enabled: false },
    ]
  },
  {
    columnName: 'Dietary Concerns', type: 'diet', choices: [
      { name: 'Balanced', value: 'balanced', enabled: false },
      { name: 'High-Fiber', value: 'high-fiber', enabled: false },
      { name: 'High-Protein', value: 'high-protein', enabled: false },
      { name: 'Low-Carb', value: 'low-carb', enabled: false },
      { name: 'Low-Fat', value: 'low-fat', enabled: false },
      { name: 'Low-Sodium', value: 'low-sodium', enabled: false },
    ]
  },
  {
    columnName: 'Health Concerns', type: 'health', choices: [
      { name: 'Alcohol', value: 'alcohol-free', enabled: false },
      { name: 'Alcohol-free', value: 'alcohol-free', enabled: false },
      { name: 'Celery-free', value: 'celery-free', enabled: false },
      { name: 'Crustcean-free', value: 'crustacean-free', enabled: false },
      { name: 'Dairy', value: 'dairy-free', enabled: false },
      { name: 'Eggs', value: 'egg-free', enabled: false },
      { name: 'Fish', value: 'fish-free', enabled: false },
      { name: 'FODMAP free', value: 'fodmap-free', enabled: false },
      { name: 'Gluten', value: 'gluten-free', enabled: false },
      { name: 'Keto', value: 'keto-friendly', enabled: false },
      { name: 'Kidney friendly', value: 'kidney-friendly', enabled: false },
      { name: 'Kosher', value: 'kosher', enabled: false },
      { name: 'Low potassium', value: 'low-potassium', enabled: false },
      { name: 'Lupine-free', value: 'lupine-free', enabled: false },
      { name: 'Mustard-free', value: 'mustard-free', enabled: false },
      { name: 'n/a', value: 'low-fat-abs', enabled: false },
      { name: 'No oil added', value: 'No-oil-added', enabled: false },
      { name: 'No-sugar', value: 'low-sugar', enabled: false },
      { name: 'Paleo', value: 'paleo', enabled: false },
      { name: 'Peanuts', value: 'peanut-free', enabled: false },
      { name: 'Pescatarian', value: 'pecatarian', enabled: false },
      { name: 'Pork-free', value: 'pork-free', enabled: false },
      { name: 'Red meat-free', value: 'red-meat-free', enabled: false },
      { name: 'Sesame-free', value: 'sesame-free', enabled: false },
      { name: 'Shellfish', value: 'shellfish-free', enabled: false },
      { name: 'Soy', value: 'soy-free', enabled: false },
      { name: 'Sugar-conscious', value: 'sugar-conscious', enabled: false },
      { name: 'Tree Nuts', value: 'tree-nut-free', enabled: false },
      { name: 'Vegan', value: 'vegan', enabled: false },
      { name: 'Vegetarian', value: 'vegetarian', enabled: false },
      { name: 'Wheat-free', value: 'wheat-free', enabled: false },
    ]
  },
  {
    columnName: 'Cuisine', type: 'cuisineType', choices: [
      { name: 'American', value: 'American', enabled: false },
      { name: 'Asian', value: 'Asian', enabled: false },
      { name: 'British', value: 'British', enabled: false },
      { name: 'Caribbean', value: 'Caribbean', enabled: false },
      { name: 'Central Europe', value: 'Central Europe', enabled: false },
      { name: 'Chinese', value: 'Chinese', enabled: false },
      { name: 'Eastern Europe', value: 'Eastern Europe', enabled: false },
      { name: 'French', value: 'French', enabled: false },
      { name: 'Indian', value: 'Indian', enabled: false },
      { name: 'Italian', value: 'Italian', enabled: false },
      { name: 'Japanese', value: 'Japanese', enabled: false },
      { name: 'Kosher', value: 'Kosher', enabled: false },
      { name: 'Mediterranean', value: 'Mediterranean', enabled: false },
      { name: 'Mexican', value: 'Mexican', enabled: false },
      { name: 'Middle Eastern', value: 'Middle Eastern', enabled: false },
      { name: 'Nordic', value: 'Nordic', enabled: false },
      { name: 'South American', value: 'South American', enabled: false },
      { name: 'South East Asian', value: 'South East Asian', enabled: false },
    ]
  },
];

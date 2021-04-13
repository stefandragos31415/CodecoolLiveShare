const data = [
	{
		title: "Perfection Salad",
		ingredients: [
			{
				name: "envelopes unflavored gelatine",
				quantity: "2",
			},
			{
				name: "cup sugar",
				quantity: "1/2",
			},
			{
				name: "teaspoon salt",
				quantity: "1",
			},
			{
				name: "can (12 oz) apple juice",
				quantity: "1",
			},
			{
				name: " cup lemon juice",
				quantity: "1/2",
			},
			{
				name: "tablespoons vinegar",
				quantity: "2",
			},
			{
				name: "cup shredded carrot",
				quantity: "1",
			},
			{
				name: "cup sliced celery",
				quantity: "1",
			},
			{
				name: "cup finely shredded cabbage",
				quantity: "1",
			},
			{
				name: "cup chopped green pepper",
				quantity: "1/2",
			},
			{
				name: "can (4 oz) chopped pimiento",
				quantity: "1",
			},
		],
		instructions: `
            In small saucepan, combine gelatine, sugar, and salt; mix well. Add 1 cup water. Heat over low heat, stirring constantly, until sugar and gelatine are dissolved. Remove from heat.
            Stir in apple juice, lemon juice, vinegar, and 1/4 cup cold water. Pour into medium bowl. Refrigerate 1 hour, or until mixture is consistency of unbeaten egg white.
            Add carrot, celery, cabbage, green pepper, and pimiento; stir until well combined.
            Turn into decorative, 1 1/2-quart mold. Refrigerate 4 hours,or until firm.
            To unmold: Run small spatula around edge of mold; invert onto serving plate. Place hot dishcloth over mold; shake gently to release. Repeat, if necessary. Lift off mold. refrigerate until ready to serve.
            Makes 8 servings.`,
		image: "https://vintagerecipecards.files.wordpress.com/2011/05/perfection_salad.jpg",
	},
	{
		title: "Hamburger Pie",
		ingredients: [
			{
				name: "pound ground beef",
				quantity: "1",
			},
			{
				name: "Potato Buds instant puffs",
				quantity: "8",
			},
			{
				name: "egg",
				quantity: "1",
			},
			{
				name: "teaspoon salt",
				quantity: "1",
			},
			{
				name: "teaspoon pepper",
				quantity: "1/8",
			},
			{
				name: "cup catsup",
				quantity: "3/4",
			},
			{
				name: "cup milk",
				quantity: "1",
			},
			{
				name: "cup shredded sharp Cheddar cheese (2 ounces)",
				quantity: "1/2",
			},
		],
		instructions: `
                    Heat oven to 350°. Mix meat, 1 1/3 cups of the instant puffs (dry), the egg, salt pepper, onion, catsup and milk. Spread in ungreased pie pan, 9×1 1/2 inches. Bake uncovered 35 to 40 minutes.
                    Prepare remaining instant puffs as directed on package for 4 servings. Top baked meat loaf with mashed potatoes; sprinkle with cheese. Bake 3 to 4 minutes longer or until cheese melts. 4 or 5 servings.
                    Storing, Freezing, and Thawing Uncooked Ground Beef
                    STORE, loosely covered, in coldest part of the refrigerator up to 24 hours (if you are planning to use the ground beef within 24 hours of purchasing).
                    FREEZE for longer storage. Wrap one-pound packs or individual patties in freezer wrap, separating patties with double layer of freezer wrap. Label with date. Store no longer than 4 months.
                    THAW wrapped 5 to 8 hours in refrigerator or cook patties frozen.
                `,
		image: "https://vintagerecipecards.files.wordpress.com/2018/07/hamburger_pie.jpg",
	},
	{
		title: "Cherry Pineapple Bologna",
		ingredients: [
			{
				name: " crushed pineapple",
				quantity: "1/2",
			},
			{
				name: "cup coarsely chopped maraschino cherries",
				quantity: "1/4",
			},
			{
				name: "cup light corn syrup",
				quantity: "1/4",
			},
			{
				name: "tabelspoons white vinegar",
				quantity: "2",
			},
			{
				name: "teaspoon cloves",
				quantity: "1/4",
			},
			{
				name: "drops red food color",
				quantity: "2",
			},
			{
				name: "teaspoons water",
				quantity: "1/2",
			},
			{
				name: "teaspoons cornstarch",
				quantity: "1/2",
			},
		],
		instructions: `
                        Heat pineapple, cherries, corn syrup, vinegar, cloves and food color to boiling, stirring occasionally. Reduce heat; simmer 15 minutes. Blend water and cornstarch; stir into fruit. Cook, stirring constantly, until mixture thickens and boils. Boil and stir 1 minute.
                        If necessary remove casing from bologna; arrange bologna in ungreased 9-inch pie pan. Cut ring diagonally at 2-inch intervals, being careful not to cut completely through. Separate cuts and spoon in part of glaze. Spread remaining glaze on top.
                        Heat oven to 400°. Prepare Potato Buds instant puffs as directed on package. Mound potatoes in center of ring. Bake 20 minutes or until potatoes are light brown. 4 servings.
                        `,
		image: "https://vintagerecipecards.files.wordpress.com/2012/06/cherry_pineapple_bologna.jpg",
	},
];

function getRecipeById(recipeId) {
	if (recipeId === "1") {
		return data[0];
	} else if (recipeId === "2") {
		return data[1];
	} else if (recipeId === "3") {
		return data[2];
	} else {
		return [];
	}
}

export { data, getRecipeById };

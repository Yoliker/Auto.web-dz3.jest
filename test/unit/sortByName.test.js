const sorting = require("../../app");

describe("Books names test suit", () => {

	it("Books names should be sorted in ascending order", () => {
		const input = [
			"Гарри Поттер",
			"Маленький мук",
			"Властелин Колец",
			"Маленький принц",
			"Волшебник изумрудного города",
		];
		const expected = [
			"Властелин Колец",
			"Волшебник изумрудного города",
			"Гарри Поттер",
			"Маленький мук",
			"Маленький принц",
		];
		const actual = sorting.sortByName(input);
		expect(actual).toEqual(expected);
	});

	it("Unsorted similar books names", () => {
		const input = [
			"Гарри Поттер",
			"Маленький мук",
			"Властелин Колец",
			"Маленький мук",
			"Волшебник изумрудного города",
		];
		const expected = [
			"Властелин Колец",
			"Волшебник изумрудного города",
			"Гарри Поттер",
			"Маленький мук",
			"Маленький мук",
		];
		const actual = sorting.sortByName(input);
		expect(actual).toEqual(expected);
	});

});



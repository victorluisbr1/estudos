const array = [
	{nome:'filme01', anoLancamento: 2021, genero: 'Tristeza'},
	{nome:'filme02', anoLancamento: 2021, genero: 'Tristeza'},
	{nome:'filme03', anoLancamento: 2021, genero: 'Tristeza'}
];

for (index in array) {
    console.log(index)

    for (chaveObj in array[index]) {
		console.log(chaveObj, array[index][chaveObj])
	}

}
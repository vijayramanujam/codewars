function twiceAsOld(dadYearsOld, sonYearsOld) {

    let years = 0;

    if (2 * sonYearsOld > dadYearsOld) {

        while (dadYearsOld !== 2 * sonYearsOld) {

        dadYearsOld++
        years++;
    }
    }



    while (dadYearsOld !== 2 * sonYearsOld) {

        dadYearsOld--
        years++;
    }


    return years;
}

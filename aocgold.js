
                function showTime(time) {
                    m = time;
                    d = Math.floor(m / 1440);
                    m = m - d * 1440;
                    h = Math.floor(m / 60);
                    m = m - h * 60;                    

                    return (d > 0 ? d + 'd ' : '') + (h > 0 ? h + 'h ' : '') + (m > 0 ? m + 'm ' : ''); //+ '(' + time + 'm)';
                }

                var expTable = [
                    4000,
                    6000,
                    8000,
                    10000,
                    14000,
                    19000,
                    25000,
                    32000,
                    40000,
                    50000,
                    62000,
                    76000,
                    92000,
                    110000,
                    130000,
                    150000,
                    180000,
                    200000,
                    230000,
                    260000,
                    290000,
                    420000,
                    480000,
                    550000,
                    630000,
                    720000,
                    840000,
                    970000,
                    1100000,
                    1300000,
                    1500000,
                    1700000,
                    2000000,
                    2200000,
                    2500000,
                    2900000,
                    3300000,
                    3700000,
                    4200000,
                    4700000,
                    5400000,
                    6100000,
                    6900000,
                    7800000,
                    7000000,
                    8600000,
                    9400000,
                    10200000,
                    11100000
                    ];

                var researchResTable = [
                    800,
                    1200,
                    2000,
                    3000,
                    5000,
                    7000,
                    10000,
                    13000,
                    17000,
                    21000,
                    27000,
                    33000,
                    40000,
                    49000,
                    58000,
                    70000,
                    83000,
                    99000,
                    120000,
                    140000,
                    160000,
                    200000,
                    230000,
                    270000,
                    330000,
                    390000,
                    470000,
                    560000,
                    670000,
                    810000
                    ]

                var researchTimeTable = [
                     10,//1
                     16,//2
                     26,//3
                     39,//4
                     65,//5
                     91,//6
                     130,//7
                     168,//8
                     220,//9
                     272,//10
                     350,//11
                     428,//12
                     518,//13
                     635,//14
                     752,//15
                     907,//16
                    1076,//17
                    1283,//18
	                1500,//19
                    1800,//20
	                2040,//21
                    2580,//22
                    2940,//23
                    3480,//24
                    4260,//25
	                5160,//26-
	                6130,//27-
	                7260,//28-
	                8730,//29-
	               10600,//30-
                    ]


                var convertTable = {
                    'human': {
                        'human': [ 1, 1, 1, 1, 1, 1 ],
                        'dwarf': [ 0, 0, 0.541666667, 0.833333333, 0.111111111, 1],
                        'lich' : [ 0, 0, 0.291666667, 4.5, 0.111111111, 1 ],
                        'rakan': [ 0.916666667, 1.125, 1.041666667, 4.166666667, 0.052631579, 1]
                    },
                    'dwarf': {
                        'human': [ 2.583333333, 1.7, 1.75, 0, 8, 1 ],
                        'dwarf': [ 1, 1, 1, 1, 1, 1 ],
                        'lich' : [ 6.25, 4, 0.5, 4.8, 1, 1 ],
                        'rakan': [ 2.416666667, 1.9, 1.875, 0, 0, 1 ]
                    },
                    'lich': {
                        'human': [ 0, 0, 3.142857143, 0.125, 8, 1 ],
                        'dwarf': [ 0, 0, 1.857142857, 0.125, 1, 1 ],
                        'lich' : [ 1, 1, 1, 1, 1, 1 ],
                        'rakan': [ 0, 0, 3.428571429, 0.875, 0.333333333, 1 ]
                    },
                    'rakan': {
                        'human': [ 1.041666667, 0.833333333, 0.916666667, 0.2, 18, 1 ],
                        'dwarf': [ 0.375, 0.5, 0.5, 0.2, 2, 1 ],
                        'lich' : [ 2, 2.041666667, 0, 0, 0, 1 ],
                        'rakan': [ 1, 1, 1, 1, 1, 1 ]
                    }
                };
                var supplyTable = {
                    'human': [['Spearmens', 1], ['Archers', 1], ['Swordmens', 1], ['Cavalery', 4], ['Priests', 2], ['Catapults', 20]],
                    'dwarf': [['Miners', 2], ['Riflemens', 2], ['Rocketeers', 2], ['Mechsuits', 5], ['Tanks', 15], ['Cannons', 20]],
                    'lich':  [['Marauders', 1], ['Acolytes', 1], ['Scorpions', 4], ['Mummies', 2], ['Spiders', 15], ['Catapults', 20]],
                    'rakan': [['Samurai', 1], ['Xbows', 1], ['Monks', 1], ['Ninjas', 4], ['Turtles', 2], ['Catapults', 20]]
                };


                $('#exp_form').submit(function(){
                    var l1 = parseInt($('#exp_level1').val());
                    var l2 = parseInt($('#exp_level2').val());
                    var ce = parseInt($('#exp_current').val());
                    if (isNaN(l1)) { l1 = 1 }
                    if (isNaN(l2)) { l1 = 50 }
                    if (isNaN(ce)) { ce = 0 }
                    if (l1 >= l2 || l1 < 1 || l2 > 50) {
                        alert('Wrong levels');
                        $('#exp_result').text('');
                        return false;
                    }
                    if (ce > expTable[l1-1] || ce < 0) {
                        alert('Wrong current exp');
                        $('#exp_result').text('');
                        return false;
                    }

                    l1 = l1 - 1;
                    l2 = l2 - 1;
                    var result = 0;

                    for (i = l1; i < l2; i++ ) {
                        result = result + expTable[i];
                    }
                    result = result - ce;
                    $('#exp_result').text(result.toLocaleString('en-US'));
                    return false;
                });

                $('#research_form').submit(function(){
                    var l1 = parseInt($('#research_level1').val());
                    var l2 = parseInt($('#research_level2').val());
                    if (isNaN(l1)) { l1 = 0 }
                    if (isNaN(l2)) { l1 = 30 }
                    if (isNaN(boost)) { boost = 0 }
                    if (l1 >= l2 || l1 < 0 || l2 > 30) {
                        alert('Wrong levels');
                        $('#research_result').text('');
                        $('#research_time').text('');
                        return false;
                    }

                    var result = 0;
                    var time = 0;
                    for (i = l1; i < l2; i++) {
                        result = result + researchResTable[i];
                        time = time + researchTimeTable[i];
                    }

                    var boost = 0;
                    $('.research_boost:checked').each(function(){
                        boost = boost + parseInt($(this).val());
                    });

                    time = Math.ceil(time / (1 + boost/100));

                    $('#research_result').text(result.toLocaleString('en-US'));
                    $('#research_time').html(showTime(time));
                    return false;
                });

                function convertCalc() {
                    var race_from = $('input[name=convert_from]:checked').val();
                    var race_to = $('input[name=convert_to]:checked').val();
                    if (race_from && race_to) {
                        $('#convert_units').show();
                    } else {
                        $('#convert_units').hide();
                        return false;
                    }
                    var vector = convertTable[race_from][race_to];
                    var titlesFrom = $('.convert_title_from');
                    var titlesTo = $('.convert_title_to');
                    for (var i = 0; i < 6; i++) {
                        $(titlesFrom[i]).html(supplyTable[race_from][i][0]);
                        $(titlesTo[i]).html(supplyTable[race_to][i][0]);
                    }

                    var vector = convertTable[race_from][race_to];
                    var inputsFrom = $('.convert_input_from');
                    var inputsTo = $('.convert_input_to');
                    var supplyFrom = 0;
                    var supplyTo = 0; 
                    for (var i = 0; i < 6; i++) {
                        $(inputsTo[i]).val(Math.floor($(inputsFrom[i]).val() * vector[i]));
                        supplyFrom = supplyFrom + $(inputsFrom[i]).val() * supplyTable[race_from][i][1];
                        supplyTo = supplyTo + $(inputsTo[i]).val() * supplyTable[race_to][i][1];
                    }
                    $('#convert_supply_from').html(supplyFrom);
                    $('#convert_supply_to').html(supplyTo);
                    
                }
                $('#convert_form').submit(function(){
                    convertCalc();
                });
                $('#convert_form').find('input').change(function(){
            …

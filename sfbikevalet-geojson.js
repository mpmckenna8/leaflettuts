//To get my coordinates use http://teczno.com/squares/#12/37.7666/-122.3821

var valetlocations = {
    "type": "FeatureCollection",

    "features": [
                     { "type": "Feature", "id": 100, "properties": { "id": 100, "Bike_Valet": "Caltrain Bike Valet", "Capacity": 100, "Dates": ["Mon-Fri 7 am - 8:05 pm, maybe not on some holidays."], "Times": ["7 am if someone needs them to wait for their bike!", ["5oclock","7oclock"]] }, "geometry": { "type": "Point", "coordinates": [ -122.39757, 37.77451 ] } }
                     ,

                 { "type": "Feature", "id": 1, "properties": { "id": 1, "Bike_Valet": "Giants", "Capacity": 200,
                 "Dates": ["At all Giants home games and some events. Ideally in operation two hours Before the National Anthem. Now offseason but there're still events coming up: ", " Dreamforce Gala"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [ -122.38885, 37.77796 ] } }


  /*
                 { "type": "Feature", "id": 2, "properties": { "id": 3, "Bike_Valet": "America's Cup Embarcadero- Pier 23", "Capacity": 100,
                 "Dates": ["10 AM - 7PM 01\/09\/2013", "02\/09\/2013", "03\/09\/2013", "04\/09\/2013"], "Times": "1000-1900" }, "geometry": { "type": "Point", "coordinates": [ -122.399621550709114, 37.804334682534055 ] } }
                 ,

                                { "type": "Feature", "id": 1, "properties": { "id": 2, "Bike_Valet": "America's Cup Marina Green",
                 "Capacity": 100, "Dates": ["10 AM - 7PM 01\/09\/2013", " 02\/09\/2013", " 03\/09\/2013", " 04\/09\/2013"], "Times": ["1000-1900"] }, "geometry": { "type": "Point", "coordinates": [ -122.43507, 37.80633  ] } }
                 ,
               { "type": "Feature", "id": 3, "properties": { "id": 4, "Bike_Valet": "Metromint di Giro", "Capacity": 80,
                 "Dates": ["09\/02\/2013 at 1100-1630"], "Times": "1100-1630" }, "geometry": { "type": "Point", "coordinates": [ -122.401397781663391, 37.802384355311119 ] } }
                 ,
                 { "type": "Feature", "id": 4, "properties": { "id": 5, "Bike_Valet": "JP Morgan Corporate Challenge", "Capacity": 150, "Dates": ["09\/03\/2013"], "Times": "1700-2230" }, "geometry": { "type": "Point", "coordinates": [ -122.388659372905778, 37.774641900381418 ] } }

                 ]

                { "type": "Feature", "id": 5, "properties": { "id": 5, "Bike_Valet": "Opera in the Park", "Capacity": 200, "Dates": ["09\/08\/2013"], "Times": "0900-1630" }, "geometry": { "type": "Point", "coordinates": [ -122.45809, 37.76909 ] } }

                 ,
                 { "type": "Feature", "id": 6, "properties": { "id": 5, "Bike_Valet": "Tour de Fat", "Capacity": 1000, "Dates": ["09\/21\/2013"], "Times": "1000-1700" }, "geometry": { "type": "Point", "coordinates": [ -122.48752, 37.76935 ] } }
                 ,

                 { "type": "Feature", "id": 7, "properties": { "id": 5, "Bike_Valet": "Dept of Environment Reception", "Capacity": 55, "Dates": ["09\/12\/2013"], "Times": "1000-1700" }, "geometry": { "type": "Point", "coordinates": [  -122.41799, 37.7756] } }

                                   { "type": "Feature", "id": 8, "properties": { "id": 8, "Bike_Valet": "Sunday Streets Five Year Anniversary Party", "Capacity": 100, "Dates": ["09\/17\/2013"], "Times": "Maybe 1800-2200" }, "geometry": { "type": "Point", "coordinates": [  -122.40538, 37.78306 ] } }
                 ,
                                  { "type": "Feature", "id": 10, "properties": { "id": 11, "Bike_Valet": "Tunes4Tubes", "Capacity": 120, "Dates": ["09\/24\/2013 7-10 pm."], "Times": "7 am if someone needs them to wait for their bike!" }, "geometry": { "type": "Point", "coordinates": [ -122.42061, 37.77641 ] } }
                 ,

                 { "type": "Feature", "id": 13, "properties": { "id": 13, "Bike_Valet": "Bike+Design", "Capacity": 100, "Dates": ["09\/27\/2013 7-10 pm."], "Times": "7 am if someone needs them to wait for their bike!" }, "geometry": { "type": "Point", "coordinates": [ -122.40492, 37.77781 ] } }
                 ,
                 { "type": "Feature", "id": 13, "properties": { "id": 13, "Bike_Valet": "Folsom St Fair", "Capacity": 100, "Dates": ["09\/29\/2013 11am - 6pm."], "Times": "7 am if someone needs them to wait for their bike!" }, "geometry": { "type": "Point", "coordinates": [ -122.40926, 37.77433 ] } }
                 ,
                                  { "type": "Feature", "id": 12, "properties": { "id": 12, "Bike_Valet": "Now and Zen", "Capacity": 100, "Dates": ["09\/29\/2013 10am - 6pm."], "Times": "7 am if someone needs them to wait for their bike!" }, "geometry": { "type": "Point", "coordinates": [ -122.45741, 37.76998 ] } }
                 ,
         { "type": "Feature", "id": 15, "properties": { "id": 15, "Bike_Valet": "RoadWorks", "Capacity": 100, "Dates": ["09\/29\/2013 10:30am - 4:30pm."], "Times": "7 am if someone needs them to wait for their bike!" }, "geometry": { "type": "Point", "coordinates": [ -122.40244, 37.76538 ] } }
                 ,




                                                    { "type": "Feature", "id": 16, "properties": { "id": 16, "Bike_Valet": "Winter Fest", "Capacity": 100, "Dates": ["11\/3\/2013"], "Times": "Maybe 1800-2230" }, "geometry": { "type": "Point", "coordinates": [  -122.40538, 37.78306 ] } }
                 ,
        { "type": "Feature", "id": 20, "properties": { "id": 17, "Bike_Valet": "Crissy Field Broadcast", "Capacity": 100, "Dates": ["Sat 10\/26\/2013 9 am - 6 pm, ", "Sun 10\/26\/2013 11 am - 2 pm"], "Times": "Maybe 1800-2230" }, "geometry": { "type": "Point", "coordinates": [  -122.46576, 37.803 ] } }
                         ,
        { "type": "Feature", "id": 17, "properties": { "id": 17, "Bike_Valet": "US Half Marathon", "Capacity": 100, "Dates": ["Sun 11\/03\/2013 6 am - 10:30 am"], "Times": "Maybe 0600-1030" }, "geometry": { "type": "Point", "coordinates": [  -122.42126, 37.80761 ] } }
        ,
//still need to fix coordinates

                { "type": "Feature", "id": 18, "properties": { "id": 17, "Bike_Valet": "Greenpeace Ship Tour", "Capacity": 100, "Dates": ["Sun 11\/17\/2013 6 am - 10:30 am"], "Times": "Maybe 0600-1030" }, "geometry": { "type": "Point", "coordinates": [  -122.40, 37.802493 ] } }

                           ,

            { "type": "Feature", "id": 23, "properties": { "id": 23, "Bike_Valet": "ArtCrank", "Capacity": 100,
            "Dates": ["12\/06\/2013 at 5:15 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [  -122.406427860,
          37.771087892 ] } }
                 ,

         { "type": "Feature", "id": 22, "properties": { "id": 25, "Bike_Valet": "A.C.T. Christmas Carol", "Capacity": 30,
                 "Dates": ["12\/06\/2013 at 5:30 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [   -122.40885257720946, 37.78709783546514 ] } }
                 ,
         { "type": "Feature", "id": 21, "properties": { "id": 24, "Bike_Valet": "SFBC Winter", "Capacity": 100,
                 "Dates": ["12\/10\/2013 at 6:00 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [ -122.39739418029785, 37.78534267732514 ] } }


                 ,
                 { "type": "Feature", "id": 25, "properties": { "id": 26, "Bike_Valet": "AirBNB Block Party", "Capacity": 100,
                 "Dates": ["2\/08\/2013 at 5:00-9 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [ -122.40974, 37.77641 ] } }
                 ,
                 { "type": "Feature", "id": 28, "properties": { "id": 29, "Bike_Valet": "ACT (Theatre) to see Napoli!", "Capacity": 100,
                 "Dates": ["2\/12\/2013 at 5:00-9 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [ -122.40885257720946, 37.78709783546514 ] } }


                 ,

                 { "type": "Feature", "id": 29, "properties": { "id": 29, "Bike_Valet": "Embarcadero Sunday Streets", "Capacity": 100,
                 "Dates": ["3\/09\/2014 at 10:30 AM- 4:00 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [ -122.410504, 37.808161 ] } },

                  //Still need to fix up these next 2

                 { "type": "Feature", "id": 26, "properties": { "id": 26, "Bike_Valet": "Bicycle Anti Theft Workshop", "Capacity": 100,
                 "Dates": ["3\/13\/2014 at 5:30 PM- 8:30 PM"], "Times": "1730," }, "geometry": { "type": "Point", "coordinates": [  -122.41699576377867,
                                                                                                                                  37.77661714214955 ] } },

                 { "type": "Feature", "id": 35, "properties": { "id": 35, "Bike_Valet": "Recology Film Screening", "Capacity": 100,
                 "Dates": ["3\/18\/2014 at 4:30 PM- 8:30 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [  -122.39989399909973,
                                                                                                                                  37.77007019461927 ] } },


                 { "type": "Feature", "id": 25, "properties": { "id": 25, "Bike_Valet": "ACT: Venus in Fir", "Capacity": 100,
                 "Dates": ["3\/19\/2014 at 5:00-9 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [ -122.40885257720946, 37.78709783546514 ] } },

                 */
                 ,
                 { "type": "Feature", "id": 35, "properties": { "id": 35, "Bike_Valet": "BioBlitz Crissy Field East Beach", "Capacity": 100,
                 "Dates": ["3\/28\/2014 and 3\/29\/2014 at 8:30 AM- 5:30 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [     -122.45005130767822,
          37.805681299886444 ] } },

{ "type": "Feature", "id": 36, "properties": { "id": 35, "Bike_Valet": "Rock and Roll Half Marathon", "Capacity": 250,
"Dates": ["4\/6\/2014 at 3:30 AM- 1:30 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [  -122.41781115531923,
          37.77938161170192 ] } },

{ "type": "Feature", "id": 35, "properties": { "id": 35, "Bike_Valet": "Blue Sky Festival", "Capacity": 100,
"Dates": ["4\/16\/2014 at 4:30 PM- 8:30 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [  -122.39499092102051,
          37.79481325362357 ] } },
                                                                                                                 { "type": "Feature", "id": 42, "properties": { "id": 42, "Bike_Valet": "Eggstravaganza", "Capacity": 100, "Dates": ["4\/19\/2013 10am - 4pm."], "Times": "7 am if someone needs them to wait for their bike!" }, "geometry": { "type": "Point", "coordinates": [ -122.45741, 37.76998 ] } }
                                                                                                ,

{ "type": "Feature", "id": 45, "properties": { "id": 25, "Bike_Valet": "ACT: The Suit", "Capacity": 75,
"Dates": ["4\/23\/2014 at 6:30-10:30 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [ -122.40885257720946, 37.78709783546514 ] } },

{ "type": "Feature", "id": 55, "properties": { "id": 55, "Bike_Valet": "King's Day", "Capacity": 75,
"Dates": ["4\/26\/2014 at 10:30 AM-6:30 PM"], "Times": "1700," }, "geometry": { "type": "Point", "coordinates": [  -122.50877022743224,
          37.76555823017286 ] } },

                 ]
}

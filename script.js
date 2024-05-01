document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".left-panel tbody tr");

    rows.forEach(row => {
        row.addEventListener("click", function () {
            // Remove the "selected" class from all rows
            rows.forEach(row => {
                row.classList.remove("selected");
            });

            // Add the "selected" class to the clicked row test
            this.classList.add("selected");

            // Get the data-id attribute value of the clicked row
            const id = this.getAttribute("data-id");
            console.log(id)
            var heading = ""
            var reason = ""
            var source = ""
            var data_files = ""
            var method = ""
            var map_src = ""
            var map_heading = "Map Heading"

            if (id == 'hazard-elevation') {
                var heading = `<h1><u>Elevation</u></h1>`;
                var reason = `<h2>High elevations signify lower flood risk, while low-lying areas indicate higher hazard potential</h2>`;
                var source = `<h2>Source :  <a href='https://earthexplorer.usgs.gov/' target='_blank' >Earth Explorer</a> </h2>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/1k1zJe5qfE9GA80WZyP6am5S0MD_Er_TKGuQYmExX7qA/edit?usp=sharing' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Obtain the TIFF file from Earth Explorer for Elevation</li>
                                    <li class="list-items">Retrieve the subdistrict map of Kerala in vector (SHP) format. This map will serve as the administrative boundary for the analysis</li>
                                    <li class="list-items">Utilize Zonal Statistics to integrate the Kerala administrative map with the TIFF file</li>
                                    <li class="list-items">Code the Variance Inflation Factor using MATLAB and find the <b>VIF of Elevation(1.8786)</b>, which is acceptable for further analysis</li>

                                </ul>
                                `;
                var map_src = "images/Elevation/Elevation.png";

                // var map_heading = `<h2>Elevation-Mapasd asd asdhjhabas f afasjhfas fasfasjkfhasf afa asfoihasf</h2>`;
                var map_heading = `<h2 style="white-space: nowrap;">Elevation Map</h2>`;

            }


            if (id == 'hazard-river_density') {
                var heading = `<h1><u>River Density</u></h1>`;
                var reason = `<h2>Implies a greater likelihood of inundation, especially in areas along riverbanks</h2>`;
                var source = `<h2>Source :  <a href='https://www.diva-gis.org/gdata' target='_blank' >DIVA-GIS</a> </h2>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/1cFwxKEDaDS9i-WNr6_OPAUZ4jqMwwwEBwaOq1ZQAfQI/edit?usp=sharing' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Acquire the SHP file of India from DIVA_GIS for Inland Waters, and  select the shape file for inland water lines</li>
                                    <li class="list-items">Obtain the subdistrict map of Kerala in vector (SHP) format, which will serve as the administrative boundary for the analysis</li>
                                    <li class="list-items">Clip the roads to the state boundary using the Clip tool and then calculate the length of river for each segment.</li>
                                    <li class="list-items">Perform a spatial join using the 'Join attribute by location' tool, where the Target vector layer is the clipped layer and the join layer is the subdistrict boundary SHP file</li>
                                    <li class="list-items">Find the total length of river in each subdistricts by creating a new field by using sum operator with group-by subdistrict option</li>
                                    <li class="list-items">Apply the Dissolve tool to merge the river segments based on subdistrict boundaries.</li>
                                    <li class="list-items">Compute the river density using the formula: River length / Shape Area</li>
                                    <li class="list-items">Code the Variance Inflation Factor using MATLAB and find the <b>VIF of River Density(4.1450)</b>, which is acceptable for further analysis</li>
                                </ul>
                                `;
                var map_src = "images/RiverDensity/RiverDesn.png";

                // var map_heading = `<h2>Elevation-Mapasd asd asdhjhabas f afasjhfas fasfasjkfhasf afa asfoihasf</h2>`;
                var map_heading = `<h2 style="white-space: nowrap;">River Density Map</h2>`;

            }

            if (id == 'hazard-rainfall') {
                var heading = `<h1><u>Rainfall</u></h1>`;
                var reason = `<h2>Provides insights into areas prone to inundation during heavy precipitation events</h2>`;
                var source = `<h2>Source :  <a href='https://www.chc.ucsb.edu/data/chirps' target='_blank' >CHIRPS</a> </h2>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/1HsG4Req8mhZgv6dkQPSRqkDsh-h-XkKZ3i46My-Vh5c/edit?usp=sharing' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Obtain the raster(TIFF) data set from the CHIRPS website for rainfall</li>
                                    <li class="list-items">Retrieve the subdistrict map of Kerala in vector (SHP) format. This map will serve as the administrative boundary for the analysis</li>
                                    <li class="list-items">Utilize Zonal Statistics to integrate the Kerala administrative map with the TIFF file to plot the Rainfall map</li>
                                    <li class="list-items">Code the Variance Inflation Factor using MATLAB and find the <b>VIF of Rainfall(8.8477)</b>, which is acceptable for further analysis</li>


                                    

                                </ul>
                                `;
                var map_src = "images/Rainfall/rain.png";

                // var map_heading = `<h2>Elevation-Mapasd asd asdhjhabas f afasjhfas fasfasjkfhasf afa asfoihasf</h2>`;
                var map_heading = `<h2 style="white-space: nowrap;">Rainfall Map</h2>`;

            }


            if (id == 'exposure-road-density') {
                var heading = `<h1><u>Road Density</u></h1>`;
                var reason = `<h2>Impacts accessibility to vital services and serves as conduits for floodwater</h2>`;
                var source = `<h2>Source :  <a href='https://www.diva-gis.org/gdata' target='_blank' >DIVA-GIS</a> </h2>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/12edn3EwuE4Lc2UDbj6HS-FJbNVrwvF4EtjkapKyVF48/edit?usp=sharing' target='_blank' >Data File</a> </h2>`;
                var method = `
                <h2>Methodology</h2>
                <ul>
                    <li class="list-items">Acquire the SHP file of India from DIVA_GIS for Roads</li>
                    <li class="list-items">Obtain the subdistrict map of Kerala in vector (SHP) format, which will serve as the administrative boundary for the analysis</li>
                    <li class="list-items">Clip the roads to the state boundary using the Clip tool and then calculate the length of road for each segments</li>
                    <li class="list-items">Perform a spatial join using the 'Join attribute by location' tool, where the Target vector layer is the clipped layer and the join layer is the subdistrict boundary SHP file</li>
                    <li class="list-items">Find the total length of roads in each subdistricts by creating a new field by using sum operator with group-by subdistrict option</li>
                    <li class="list-items">Apply the Dissolve tool to merge the road segments based on subdistrict boundaries</li>
                    <li class="list-items">Compute the road density using the formula:  Road_length / Shape Area</li>
                    <li class="list-items">Code the Variance Inflation Factor using MATLAB and find the <b>VIF of Road Density(3.6175)</b>, which is acceptable for further analysis</li>
                </ul>
                `;
                var map_src = "images/RoadDensity/RoadDensity.png";

                // var map_heading = `<h2>Elevation-Mapasd asd asdhjhabas f afasjhfas fasfasjkfhasf afa asfoihasf</h2>`;
                var map_heading = `<h2 style="white-space: nowrap;">Road Density Map</h2>`;

            }



            if (id == 'exposure-population-density') {
                var heading = `<h1><u>Population Density</u></h1>`;
                var reason = `<h2>Indicates an increased potential for human casualties and displacement</h2>`;
                var source = `<h2>Source :  <a href='https://sedac.ciesin.columbia.edu/data/collection/gpw-v4' target='_blank' >SEDAC</a> </h2>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/12E_orHULgqs6IZLO4-olYh626NWWlKtTvuOs3pV5cFU/edit?usp=sharing' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Obtain the raster(TIFF) data set from the SEDAC website for population</li>
                                    <li class="list-items">Retrieve the subdistrict map of Kerala in vector (SHP) format. This map will serve as the administrative boundary for the analysis</li>
                                    <li class="list-items">Utilize Zonal Statistics to integrate the Kerala administrative map with the TIFF file to plot the population density</li>
                                    <li class="list-items">Code the Variance Inflation Factor using MATLAB and find the <b>VIF of Population Density(1.3927)</b>, which is acceptable for further analysis</li>
                                </ul>
                                `;
                var map_src = "images/PopulationDensity/PopDensity.png";

                // var map_heading = `<h2>Elevation-Mapasd asd asdhjhabas f afasjhfas fasfasjkfhasf afa asfoihasf</h2>`;
                var map_heading = `<h2 style="white-space: nowrap;">Population Density Map</h2>`;

            }


            if (id == 'exposure-builtup-index') {
                var heading = `<h1><u>Built-Up Index</u></h1>`;
                var reason = `<h2>Indicate elevated flood risk due to impervious surfaces and inadequate drainage systems</h2>`;
                var source = `<h2>Source :  <a href='https://sedac.ciesin.columbia.edu/data/set/ghsl-population-built-up-estimates-degree-urban-smod' target='_blank' >SEDAC</a> </h2>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/13iny9Ax4dwZwBvvWFw8w5ID6-TMncXQLwcf-Ta-TMaA/edit?usp=sharing' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Obtain the raster(TIFF) data set from the SEDAC website for builtup index</li>
                                    <li class="list-items">Retrieve the subdistrict map of Kerala in vector (SHP) format. This map will serve as the administrative boundary for the analysis</li>
                                    <li class="list-items">Utilize Zonal Statistics to integrate the Kerala administrative map with the TIFF file to plot the built-up index map</li>
                                    <li class="list-items">Code the Variance Inflation Factor using MATLAB and find the <b>VIF of Built Up Index(1.0469)</b>, which is acceptable for further analysis</li>
                                </ul>
                                `;
                var map_src = "images/BuiltUpIndex/BuiltUpArea.png";

                // var map_heading = `<h2>Elevation-Mapasd asd asdhjhabas f afasjhfas fasfasjkfhasf afa asfoihasf</h2>`;
                var map_heading = `<h2 style="white-space: nowrap;">Built Up Index Map</h2>`;

            }


            if (id == 'vul-di') {
                var heading = `<h1><u>Deprivation Index</u></h1>`;
                var reason = `<h2>Indicates the poverty. Poor find it difficult to recover from floods</h2>`;
                var source = `<h2>Source :  <a href='https://sedac.ciesin.columbia.edu/data/set/povmap-grdi-v1/data-download' target='_blank' >SEDAC</a> </h2>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/1glPPrvHIwdVqkiSoyN4nvKLezFoWsQQ-M0KPWJNaAIg/edit?usp=sharing' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Obtain the raster(TIFF) data set from the SEDAC website for deprivation index</li>
                                    <li class="list-items">Retrieve the subdistrict map of Kerala in vector (SHP) format. This map will serve as the administrative boundary for the analysis</li>
                                    <li class="list-items">Utilize Zonal Statistics to integrate the Kerala administrative map with the TIFF file to plot the deprivation index map</li>
                                    <li class="list-items">Code the Variance Inflation Factor using MATLAB and find the <b>VIF of Deprivation Index(1.4905)</b>, which is acceptable for further analysis</li>
                                </ul>
                                `;
                var map_src = "images/Deprivation/Deprivation Index - Poverty.png";


                var map_heading = `<h2 style="white-space: nowrap;">Deprivation Index Map</h2>`;

            }

            if (id == 'vul-literacy-rate') {
                var heading = `<h1><u>Literacy</u></h1>`;
                var reason = `<h2>Informed people (literate) make better flood mitigation decisions.</h2>`;
                var source = `<h2>Source :  <a href='https://censusgis.org/' target='_blank' >CENSUS ORG</a> </h2>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/18AtogPmeJ6aH48Hv9dpjxqtGJ4MbiFcMFcR9SlSwZj4/edit?usp=sharing' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Obtain the CSV file from the Census 2011 of India website for Literacy rate</li>
                                    <li class="list-items">Retrieve the subdistrict map of Kerala in vector (SHP) format. This map will serve as the administrative boundary for the analysis</li>
                                    <li class="list-items">A join is made to integrate the Kerala administrative map with the CSV file to plot the map</li>
                                    <li class="list-items">Code the Variance Inflation Factor using MATLAB and find the <b>VIF of Literacy Rate(1.2879)</b>, which is acceptable for further analysis</li>
                                </ul>
                                `;
                var map_src = "images/Literacy/LiteracyRate.png";


                var map_heading = `<h2 style="white-space: nowrap;">Literacy Rate Map</h2>`;

            }


            if (id == 'vul-sex-ratio') {
                var heading = `<h1><u>Sex Ratio</u></h1>`;
                var reason = `<h2>Informed people (literate) make better flood mitigation decisions.</h2>`;
                var source = `<h2>Source :  <a href='https://censusgis.org/' target='_blank' >CENSUS ORG</a> </h2>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/1L9p2eXBCHBZtfD7I7-Xu58TE6tLg3Nb8MGjVevmHWhM/edit?usp=sharing' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Obtain the CSV file from the Census 2011 of India website for Sex Ratio</li>
                                    <li class="list-items">Retrieve the subdistrict map of Kerala in vector (SHP) format. This map will serve as the administrative boundary for the analysis</li>
                                    <li class="list-items">A join is made to integrate the Kerala administrative map with the CSV file to plot the map</li>
                                    <li class="list-items">Code the Variance Inflation Factor using MATLAB and find the <b>VIF of Sex Ratio(1.0949)</b>, which is acceptable for further analysis</li>
                                </ul>
                                `;
                var map_src = "images/Sex Ratio/SexRatio.png";


                var map_heading = `<h2 style="white-space: nowrap;">Sex Ratio Map</h2>`;

            }


            if (id == 'vul-cropland') {
                var heading = `<h1><u>Crop Land</u></h1>`;
                var reason = `<h2>More crop area indicates economic prosperity and food security</h2>`;
                var source = `<h2>Source :  <a href='https://sedac.ciesin.columbia.edu/data/set/aglands-croplands-2000/data-download' target='_blank' >SEDAC</a> </h2>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/1VOKv9XtNk93dkbWG91oYp1SwQY90LQG85SXyEZG7pfM/edit?usp=sharing' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Obtain the raster(TIFF) data set from the SEDAC website for Cropland</li>
                                    <li class="list-items">Retrieve the subdistrict map of Kerala in vector (SHP) format. This map will serve as the administrative boundary for the analysis</li>
                                    <li class="list-items">Utilize Zonal Statistics to integrate the Kerala administrative map with the TIFF file to plot the cropland map</li>
                                    <li class="list-items">Code the Variance Inflation Factor using MATLAB and find the <b>VIF of Cropland(1.4564)</b>, which is acceptable for further analysis</li>
                                </ul>
                                `;
                var map_src = "images/Cropland/cropland.png";


                var map_heading = `<h2 style="white-space: nowrap;">Crop Land Map</h2>`;

            }


            if (id == 'hazard-index-map') {
                var heading = `<h1><u>Hazard Index Map</u></h1>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/1W-UEU-L4fbq0AwhsIcQS9YAASTHpw1Ys/edit?usp=sharing&ouid=105125682872519420967&rtpof=true&sd=true' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Elevation, River Density and Rainfall indicators are chosen for the hazard indexing of floods in Kerala at the sub-district level</li>
                                    <li class="list-items">All indicators data are normalized as per their correlation with hazard</li>
                                    <li class="list-items">Hazard index is calculated using additive aggregation with equal weightage and maps are plotted using QGIS software</li>                                </ul>
                                `;
                var map_src = "images/Hazard_Index.png";


                var map_heading = `<h2 style="white-space: nowrap;">Harzard Index Map</h2>`;

            }



            if (id == 'exposure-index-map') {
                var heading = `<h1><u>Exposure Index Map</u></h1>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/1W-UEU-L4fbq0AwhsIcQS9YAASTHpw1Ys/edit?usp=sharing&ouid=105125682872519420967&rtpof=true&sd=true' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Road Density, Population Density and Built-Up Index indicators are chosen for the exposure indexing of floods in Kerala at the sub-district level</li>
                                    <li class="list-items">All indicators data are normalized as per their correlation with exposure</li>
                                    <li class="list-items">Exposure index is calculated using additive aggregation with equal weightage and maps are plotted using QGIS software</li>                                </ul>
                                `;
                var map_src = "images/ExposureIndex.png";


                var map_heading = `<h2 style="white-space: nowrap;">Exposure Index Map</h2>`;

            }



            if (id == 'vul-index-map') {
                var heading = `<h1><u>Vulnerability Index Map</u></h1>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/1W-UEU-L4fbq0AwhsIcQS9YAASTHpw1Ys/edit?usp=sharing&ouid=105125682872519420967&rtpof=true&sd=true' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Deprivation Index, Literacy Rate, Sex Ratio and Cropland ratio indicators are chosen for the exposure indexing of floods in Kerala at the sub-district level</li>
                                    <li class="list-items">All indicators data are normalized as per their correlation with vulnerability</li>
                                    <li class="list-items">Vulnerability index is calculated using additive aggregation with equal weightage and maps are plotted using QGIS software</li>                                </ul>
                                `;
                var map_src = "images/Vulnerability Index.png";


                var map_heading = `<h2 style="white-space: nowrap;">Vulnerability Index Map</h2>`;

            }


            if (id == 'flood-risk-map') {
                var heading = `<h1><u>Flood Risk Map</u></h1>`;
                var data_files = `<h2> Link to Data :  <a href='https://docs.google.com/spreadsheets/d/1W-UEU-L4fbq0AwhsIcQS9YAASTHpw1Ys/edit?usp=sharing&ouid=105125682872519420967&rtpof=true&sd=true' target='_blank' >Data File</a> </h2>`;
                var method = `
                                <h2>Methodology</h2>
                                <ul>
                                    <li class="list-items">Hazard index, Exposure index and Vulnerability Index are found using normalization and technique of equal weighting</li>
                                    <li class="list-items">The risk index is found by multiplying the hazard, exposure and vulnerability indexes</li>
                                    <li class="list-items">Using the Risk Index, a map is plotted on the QGIS software that determines the flood risk of the sub-districts of Kerala. </li>                                </ul>
                                `;
                var map_src = "images/Risk Index.png";


                var map_heading = `<h2 style="white-space: nowrap;">Flood Risk Map</h2>`;

            }









            const headingContainer = document.getElementById("heading-container");
            headingContainer.innerHTML = heading;

            const reasonContainer = document.getElementById("reason-container");
            reasonContainer.innerHTML = reason;

            const sourceContainer = document.getElementById("source-container");
            sourceContainer.innerHTML = source;

            const dataFilesContainer = document.getElementById("data-files-container");
            dataFilesContainer.innerHTML = data_files;

            const methodContainer = document.getElementById("method-container");
            methodContainer.innerHTML = method;

            const mapContainer = document.getElementById("map-container");  
            mapContainer.innerHTML = `${map_heading}
            <div  style="text-align: center;">
                <img src="${map_src}" alt="Image ${id}" style="width: 700px; height: 450px;">
            </div>`;

            // const imageContainer = document.createElement("div");
            // imageContainer.classList.add("image-container");
            // const mapImage = new Image();
            // mapImage.src = map_src;
            // mapImage.alt = `Image ${id}`;
            // imageContainer.appendChild(mapImage);
            // mapImage.style.width = "700px";
            // mapImage.style.height = "450px";
            // mapContainer.style.textAlign = "center";
            // mapContainer.appendChild(mapImage);
        });
    });
});

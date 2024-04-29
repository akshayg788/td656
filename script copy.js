document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll(".left-panel tbody tr");

    rows.forEach(row => {
        row.addEventListener("click", function() {
            // Remove the "selected" class from all rows
            rows.forEach(row => {
                row.classList.remove("selected");
            });

            // Add the "selected" class to the clicked row
            this.classList.add("selected");

            // Get the data-id attribute value of the clicked row
            const id = this.getAttribute("data-id");
            console.log(id)
            const reason = "aaa"
            const source = "aaa"
            const data_files= "aaa"
            const method = "aaaa"
            const map_src = "map"

            if(id == 'hazard-elevation'){
                reason = "High elevations signify lower flood risk, while low-lying areas indicate higher hazard potential"
                source = "Earth Explorer"
                data_files = "https://docs.google.com/document/d/1zsYe_580IRl-fkzSgqdBRXklv6vuXXFCWj8ahtPde4A/edit"
                method = "method 1"
                map_src = 'images/Elevation/Elevation.png'
            }
            

            const reasonContainer = document.getElementById("reason-container");
            dataContainer.textContent = reason;

            const sourceContainer = document.getElementById("source-container");
            dataContainer.textContent = source;

            const dataFilesContainer = document.getElementById("data-files-container");
            dataContainer.textContent = data_files;
        
            const methodContainer = document.getElementById("method-container");
            dataContainer.textContent = method;
            
            const imageContainer = document.getElementById("image-container");
            imageContainer.innerHTML = `<img src="images/${id}.jpg" alt="Image ${id}">`;

            const dataContainer = document.getElementById("data-container");
            dataContainer.textContent = `Data for item ${id}`;
        });
    });
});

var apiURL = 'http://127.0.0.1:8000/json';

new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
        items: null,
    },
    methods: {
        getJson: function(){
            this.$http.get(apiURL).then(function(response){
                this.items = response.data;
            }, function(error){
                console.log(error.statusText);
            });
        },
        loadImage: function (imageloc) {
            console.log(imageloc)
            var imageUrl = imageloc,
            imageBounds = [[49.53173120782476,-5.764099],[50.545333158635955,-4.2730713]],
            image = L.imageOverlay(imageUrl, imageBounds);

              if (map.hasLayer(image)) {
                map.removeLayer(image);
                this.imagetext1 = null
                }
            else {
                image.addTo(map);
                this.imagetext1 = 'Sentinel2 image <br> Date:  10/01/2018 <br> Time:11:24:31 <br> Cloudcover:  05%'
            }
        }, 
    },
    beforeMount(){
        this.getJson();
    }
});


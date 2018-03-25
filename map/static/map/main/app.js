var apiURL = 'http://127.0.0.1:8000/json';

new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
        items: null,
        ww3: false,
    },
    methods: {
        getJson: function(){
            this.$http.get(apiURL).then(function(response){
                this.items = response.data;
            }, function(error){
                console.log(error.statusText);
            });
        },
        loadImage: function (imageloc,ww3data) {
            console.log(imageloc)
            var imageUrl = imageloc,
            imageBounds = [[49.53173120782476,-5.764099],[50.545333158635955,-4.2730713]],
            image = L.imageOverlay(imageUrl, imageBounds);
            map.removeLayer(image);
            image.addTo(map);

            if (this.ww3 == true) {
                ww3dataJson = JSON.parse(ww3data)
                if (typeof ww3layer === 'undefined'){}
                else{map.removeLayer(ww3layer);
                    console.log('SHOULD BE REMOViNG LAYER')};                
                ww3layer = L.geoJSON(ww3dataJson, {
                    style: function(feature) {
                        return {
                        color: feature.properties['stroke'],
                            };
                        }
                    });
                ww3layer.addTo(map);
                // var myLayer = L.geoJSON().addTo(map);
                // myLayer.addData(ww3data);

            }
        },
        showww3: function(){
            if (this.ww3 == false) {
                this.ww3 = true;
                }
            else {
                this.ww3 = false;
                map.removeLayer(ww3layer);

            }
        },
    },
    beforeMount(){
        this.getJson();
    }
});


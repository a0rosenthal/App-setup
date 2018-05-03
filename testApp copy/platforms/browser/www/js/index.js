/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    };

    var oldResults = ['1','2','3','4'];
    var elementIsClicked = false;
    function clickHandler(){ // declare a function that updates the state
        var list = document.getElementById('list');
        var items = list.childNodes;
        oldResults[1] = items[1].innerHTML;
        items[1].innerHTML="Sorry, no results :(";
        oldResults[3] = items[3].innerHTML;
        items[3].innerHTML=" ";
        oldResults[5] = items[5].innerHTML;
        items[5].innerHTML=" ";
        oldResults[7] = items[7].innerHTML;
        items[7].innerHTML = " ";
        document.getElementById("searchbutton").src = "./img/exitButton.png";
        document.getElementById("searchbutton").removeEventListener("click", clickHandler);
        document.getElementById("searchbutton").id = "cancelbutton";
        var ele = document.getElementById("cancelbutton");
        ele.addEventListener('click', cancelSearch);
    }

    var element = document.getElementById('searchbutton'); // grab a reference to your element
    element.addEventListener('click', clickHandler);

    function cancelSearch(){
        var list = document.getElementById('list');
        var items = list.childNodes;
        items[1].innerHTML = oldResults[1];
        items[3].innerHTML = oldResults[3];
        items[5].innerHTML = oldResults[5];
        items[7].innerHTML = oldResults[7];
        var cb = document.getElementById("cancelbutton");
        cb.removeEventListener("click",clickHandler);
        cb.src = "./img/searchbutton.png";
        cb.id = "searchbutton";
        var ele = document.getElementById("searchbutton");
        ele.addEventListener('click',clickHandler);
    }
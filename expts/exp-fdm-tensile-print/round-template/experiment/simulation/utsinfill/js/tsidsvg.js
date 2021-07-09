p1="";
p2="";
p3="";
p4="";
p5="";
p6="";

var x1=1.5;
var x2=0.75;
var i=0;
var h=0;
var t = 6;
var z1 = 0;
var z2=0;
var z,sw,v,n;
var tensilevalues = [[20,13.95,8.74],[40,18.07,12.86],[60,22.19,16.98],[80,26.31,21.10],[100,30.43,25.22]];
var svg= document.getElementById('specimen');
var svgNS = "http://www.w3.org/2000/svg";

var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
var d31="l1.5 -1.5";
var d32="v-45.55 l1.5 1.5"

p201 = "h12.5l-12.5-12.5v-12.5l25 25h12.5l-37.5-37.5v-5.05h7.45l41.161 41.161c2.4943-1.4272 5.0281-2.8578 7.5391-4.2818l0.50101-0.17799c-12.204-12.203-24.474-24.473-36.701-36.701h12.5l33.426 33.426c0.54725-0.20018 1.1173-0.39983 1.6735-0.59745l8.5812-1.6478c-10.38-10.38-20.79-20.79-31.181-31.181h1.2l10 5.671 10.814 3.8433 20.661 20.665h12.507c-5.9082-5.9104-11.874-11.877-17.803-17.808l12.499 7e-3 17.807 17.807c4.1363-0.0106 8.3329-5e-3 12.491-5e-3l-17.8-17.803h12.5l17.796 17.803h12.504l-17.802-17.805h12.5l17.802 17.805h12.504c-5.9128-5.9122-11.875-11.875-17.806-17.806l12.504 4e-3 17.807 17.807c4.135-0.0106 8.3302-5e-3 12.487-5e-3l-17.796-17.803 12.495-5e-3c5.931 5.9309 11.872 11.873 17.807 17.808l12.497 6.4e-4 -17.804-17.807 12.511-7.7e-4 17.797 17.808h12.5c-5.921-5.9204-11.872-11.872-17.804-17.804l12.502 2e-3 17.81 17.801h12.5l-17.812-17.808 12.501 5e-3 17.811 17.803h12.492c-5.9303-5.9295-11.872-11.871-17.806-17.806l12.498-2e-3 17.814 17.814 11.014-7e-3 1.8381 0.35297-18.166-18.16 12.502 2e-3 22.02 22.016 7.0064 2.489 10 5.671 3.65 5e-5 -31.573-31.573 6.5228-1.2562 3.485-1.236 34.065 34.065h12.5l-37.518-37.518 7.9758-4.5259 42.042 42.044h5v-12.5l-30.042-30.042 12.494-6e-3 17.547 17.547v-12.5l-5.0415-5.0415h5.0415h1"
p202 = "h12.5l-12.5 12.5v12.5l25-25h12.5l-37.5 37.5v5.05h7.45l41.161-41.161c2.4943 1.4272 5.0281 2.8578 7.5391 4.2818l0.50101 0.17799c-12.204 12.203-24.474 24.473-36.701 36.701h12.5l33.426-33.426c0.54725 0.20018 1.1173 0.39983 1.6735 0.59745l8.5812 1.6478c-10.38 10.38-20.79 20.79-31.181 31.181h1.2l10-5.671 10.814-3.8433 20.661-20.665h12.507c-5.9082 5.9104-11.874 11.877-17.803 17.808l12.499-7e-3 17.807-17.807c4.1363 0.0106 8.3329 5e-3 12.491 5e-3l-17.8 17.803h12.5l17.796-17.803h12.504l-17.802 17.805h12.5l17.802-17.805h12.504c-5.9128 5.9122-11.875 11.875-17.806 17.806l12.504-4e-3 17.807-17.807c4.135 0.0106 8.3302 5e-3 12.487 5e-3l-17.796 17.803 12.495 5e-3c5.931-5.9309 11.872-11.873 17.807-17.808l12.497-6.4e-4 -17.804 17.807 12.511 7.7e-4 17.797-17.808h12.5c-5.921 5.9204-11.872 11.872-17.804 17.804l12.502-2e-3 17.81-17.801h12.5l-17.812 17.808 12.501-5e-3 17.811-17.803h12.492c-5.9303 5.9295-11.872 11.871-17.806 17.806l12.498 2e-3 17.814-17.814 11.014 7e-3 1.8381-0.35297-18.166 18.16 12.502-2e-3 22.02-22.016 7.0064-2.489 10-5.671 3.65-5e-5 -31.573 31.573 6.5228 1.2562 3.485 1.236 34.065-34.065h12.5l-37.518 37.518 7.9758 4.5259 42.042-42.044h5v12.5l-30.042 30.042 12.494 6e-3 17.547-17.547v12.5l-5.0415 5.0415h5.0415h1"
p401 = "h7.5l-7.5-7.5v-7.5l15 15h7.5l-22.5-22.5v-7.5l30 30h7.5l-37.5-37.5v-5.05h2.45l42.55 42.55h1.15l4.0521-2.2979 0.0025 3e-3 -40.255-40.255h7.5l37.539 37.537 1.161-0.65841 4.1903-1.4887 0.0029 3e-3 -35.393-35.393h7.5l33.429 33.423 1.671-0.59365 4.3866-0.84236 0.0023 0.0023-31.989-31.989h6.2l3.0077 1.7077 29.074 29.074-3e-3 -0.0035 3.1211-0.59942h3.779l3e-3 0.0033-22.046-22.047 4.4639 1.5859 5.721 1.1 19.354 19.354h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.8 17.8h7.5l-17.8-17.8h7.5l17.807 17.807-3e-3 -0.0033h6.021l1.8305 0.35151 5e-3 0.0053-18.16-18.16 7.4953-0.0047-3e-3 -0.0031 19.952 19.946 2.6801 0.51465 8.2654 2.9364 5e-3 5e-3 -23.393-23.393 1.3224-0.0066 5.1756-0.99387 6e-3 0.0044 31.168 31.168h7.5l-32.377-32.377 2.3274-0.45155 3.4796-1.2362 34.07 34.065h7.5l-36.024-36.024 2.3739-0.85506 2.7296-1.5414 38.42 38.42h7.5l-41.134-41.141 2.4842-1.4088h3.6l42.55 42.55v-7.5l-35.05-35.05h7.5l27.55 27.55v-7.5l-20.05-20.05h7.5l12.55 12.55v-7.5l-5.05-5.05h5.05";
p402 = "h7.5l-7.5 7.5v7.5l15-15h7.5l-22.5 22.5v7.5l30-30h7.5l-37.5 37.5v5.05h2.45l42.55-42.55h1.15l4.0521 2.2979 0.0025-3e-3 -40.255 40.255h7.5l37.539-37.537 1.161 0.65841 4.1903 1.4887 0.0029-3e-3 -35.393 35.393h7.5l33.429-33.423 1.671 0.59365 4.3866 0.84236 0.0023-0.0023-31.989 31.989h6.2l3.0077-1.7077 29.074-29.074-3e-3 0.0035 3.1211 0.59942h3.779l3e-3 -0.0033-22.046 22.047 4.4639-1.5858 5.721-1.1 19.354-19.354h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.8-17.8h7.5l-17.8 17.8h7.5l17.807-17.807-3e-3 0.0033h6.021l1.8305-0.35151 5e-3 -0.0053-18.16 18.16 7.4953 0.0047-3e-3 0.0031 19.952-19.946 2.6801-0.51465 8.2654-2.9364 5e-3 -5e-3 -23.393 23.393 1.3224 0.0066 5.1756 0.99387 6e-3 -0.0044 31.168-31.168h7.5l-32.377 32.377 2.3274 0.45155 3.4796 1.2362 34.07-34.065h7.5l-36.024 36.024 2.3739 0.85506 2.7296 1.5414 38.42-38.42h7.5l-41.134 41.141 2.4842 1.4088h3.6l42.55-42.55v7.5l-35.05 35.05h7.5l27.55-27.55v7.5l-20.05 20.05h7.5l12.55-12.55v7.5l-5.05 5.05h5.05";
p601 = "h5.5l-5.5-5.5v-5.5l11 11h5.5l-16.5-16.5v-5.5l22 22h5.5l-27.5-27.5v-5.5l33 33h5.5l-38.5-38.5v-4.05h1.45l42.55 42.55h2.15l2.1377-1.2123 0.0067 7e-3 -41.344-41.345h5.5l39.354 39.354-0.0068-7e-3 3.5097-1.9903 5e-3 5e-3 -37.362-37.362h5.5l35.786 35.786-0.0023-2e-3 4.0644-1.4439-34.348-34.34h5.5l32.897 32.901 0.20298-0.072113 4.3866-0.84236 0.0043 0.0043-31.991-31.991h5.5l31.101 31.1 4.6082-0.88491-24.273-24.279 8.5312 3.0312 21.217 21.217-5e-3 -0.0053 5.5033 0.0033-19.475-19.475 6.8047 1.3047 18.163 18.163h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l17.8 17.8h5.5l-17.8-17.8h5.5l18.991 18.991-4e-3 -0.0036 6.8129 1.3083-20.308-20.3 5.5128 0.0086 23.117 23.117-7e-3 -7e-3 3.9101 1.3891 6.8876 3.9059-29.002-28.999 4.6113-0.88867 31.653 31.653h5.5l-32.535-32.544 1.4854-0.28524 2.7546-0.96642 33.795 33.795h5.5l-35.243-35.243 4.0516-1.4441 9e-3 0.0046 36.682 36.682h5.5l-38.611-38.602 3.5102-1.9906 0.0104 0.0027 40.59 40.59h5.5l-42.55-42.55h5.5l40.55 40.55v-5.5l-35.05-35.05h5.5l29.55 29.55v-5.5l-24.05-24.05h5.5l18.55 18.55v-5.5l-13.05-13.05h5.5l7.55 7.55v-5.5l-2.05-2.05h2.05";
p602 = "h5.5l-5.5 5.5v5.5l11-11h5.5l-16.5 16.5v5.5l22-22h5.5l-27.5 27.5v5.5l33-33h5.5l-38.5 38.5v4.05h1.45l42.55-42.55h2.15l2.1377 1.2123 0.0067-7e-3 -41.344 41.345h5.5l39.354-39.354-0.0068 7e-3 3.5097 1.9903 5e-3 -5e-3 -37.362 37.362h5.5l35.786-35.786-0.0023 2e-3 4.0644 1.4439-34.348 34.34h5.5l32.897-32.901 0.20298 0.07211 4.3866 0.84236 0.0043-0.0043-31.991 31.991h5.5l31.101-31.1 4.6082 0.88491-24.273 24.279 8.5312-3.0312 21.217-21.217-5e-3 0.0053 5.5033-0.0033-19.475 19.475 6.8047-1.3047 18.163-18.163h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l17.8-17.8h5.5l-17.8 17.8h5.5l18.991-18.991-4e-3 0.0036 6.8129-1.3083-20.308 20.3 5.5128-0.0086 23.117-23.117-7e-3 7e-3 3.9101-1.3891 6.8876-3.9059-29.002 28.999 4.6113 0.88867 31.653-31.653h5.5l-32.535 32.544 1.4854 0.28524 2.7546 0.96642 33.795-33.795h5.5l-35.243 35.243 4.0516 1.4441 9e-3 -5e-3 36.682-36.682h5.5l-38.611 38.602 3.5102 1.9906 0.0104-3e-3 40.59-40.59h5.5l-42.55 42.55h5.5l40.55-40.55v5.5l-35.05 35.05h5.5l29.55-29.55v5.5l-24.05 24.05h5.5l18.55-18.55v5.5l-13.05 13.05h5.5l7.55-7.55v5.5l-2.05 2.05h2.05";
p801 = "h3.75l-3.75-3.75v-3.75l7.5 7.5h3.75l-11.25-11.25v-3.75l15 15h3.75l-18.75-18.75v-3.75l22.5 22.5h3.75l-26.25-26.25v-3.75l30 30h3.75l-33.75-33.75v-3.75l37.5 37.5h3.75l-41.25-41.25v-1.3h2.45l42.55 42.55h1.15l1.658-0.94023-41.608-41.61h3.75l40.254 40.254-2e-3 -2e-3 2.3923-1.3567-38.894-38.895h3.75l37.54 37.54-0.0017-2e-3 1.162-0.65898 1.4233-0.50566 0.0012 1e-3 -36.375-36.374h3.75l35.391 35.391-5e-4 -5e-4 2.7669-0.98297-34.407-34.407h3.75l33.425 33.424 1.6751-0.59512 1.2407-0.23826 7.5e-4 7.5e-4 -32.591-32.591h3.75l31.987 31.987-7.5e-4 -7.5e-4 3.145-0.60393-31.382-31.383h2.45l3.0066 1.705 29.074 29.075-2e-3 -2e-3 3.1216-0.59943h0.029l2.5e-4 2.5e-4 -24.102-24.102 5.8125 2.0625 22.041 22.041-1e-3 -0.0012h3.7507l-20.246-20.245 4.6392 0.88581 19.356 19.36-7.5e-4 -7.5e-4h3.7478l-18.461-18.464 3.4345 0.65548h0.96681l17.808 17.804h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l17.8 17.8h3.75l-17.8-17.8h3.75l18.161 18.161-5e-3 -0.0053 4.6413 0.89126 3e-3 0.0027-19.057-19.057 3e-3 0.0031h3.7458l19.948 19.944-2e-3 -2e-3 2.687 0.51598 2.4472 0.86941-21.331-21.328 3.7569 0.0027 23.393 23.393-1e-3 -1e-3 3.1346 1.1136 3.9964 2.2663-27.171-27.163 3.1531-0.60548 31.172 31.173h3.75l-31.774-31.774 3.1376-0.60642 32.386 32.38h3.75l-33.085-33.083 2.7615-0.98106 34.074 34.064h3.75l-35.059-35.046 2.781-0.98159 36.028 36.028h3.75l-37.073-37.065 2.406-1.3518 38.417 38.417h3.75l-39.778-39.784 2.381-1.3503 0.0173 0.0047 41.129 41.129h3.75l-42.501-42.493 0.10124-0.05741h3.6l42.55 42.55v-3.75l-38.8-38.8h3.75l35.05 35.05v-3.75l-31.3-31.3h3.75l27.55 27.55v-3.75l-23.8-23.8h3.75l20.05 20.05v-3.75l-16.3-16.3h3.75l12.55 12.55v-3.75l-8.8-8.8h3.75l5.05 5.05v-3.75l-1.3-1.3h1.3";
p802 = "h3.75l-3.75 3.75v3.75l7.5-7.5h3.75l-11.25 11.25v3.75l15-15h3.75l-18.75 18.75v3.75l22.5-22.5h3.75l-26.25 26.25v3.75l30-30h3.75l-33.75 33.75v3.75l37.5-37.5h3.75l-41.25 41.25v1.3h2.45l42.55-42.55h1.15l1.658 0.94022-41.608 41.61h3.75l40.254-40.254-2e-3 2e-3 2.3923 1.3567-38.894 38.895h3.75l37.54-37.54-0.0017 2e-3 1.162 0.65898 1.4233 0.50566 0.0012-1e-3 -36.375 36.374h3.75l35.391-35.391-5e-4 5e-4 2.7669 0.98297-34.407 34.407h3.75l33.425-33.424 1.6751 0.59512 1.2407 0.23826 7.5e-4 -7.5e-4 -32.591 32.591h3.75l31.987-31.987-7.5e-4 7.5e-4 3.145 0.60393-31.382 31.383h2.45l3.0066-1.705 29.074-29.075-2e-3 2e-3 3.1216 0.59943h0.029l2.5e-4 -2.5e-4 -24.102 24.102 5.8125-2.0625 22.041-22.041-1e-3 0.0012h3.7507l-20.246 20.245 4.6392-0.88581 19.356-19.36-7.5e-4 7.5e-4h3.7478l-18.461 18.464 3.4345-0.65548h0.96681l17.808-17.804h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l17.8-17.8h3.75l-17.8 17.8h3.75l18.161-18.161-5e-3 0.0053 4.6413-0.89126 3e-3 -0.0027-19.057 19.057 3e-3 -0.0031h3.7458l19.948-19.944-2e-3 2e-3 2.687-0.51598 2.4472-0.86941-21.331 21.328 3.7569-0.0027 23.393-23.393-1e-3 1e-3 3.1346-1.1136 3.9964-2.2663-27.171 27.163 3.1531 0.60548 31.172-31.173h3.75l-31.774 31.774 3.1376 0.60642 32.386-32.38h3.75l-33.085 33.083 2.7615 0.98106 34.074-34.064h3.75l-35.059 35.046 2.781 0.98159 36.028-36.028h3.75l-37.073 37.065 2.406 1.3518 38.417-38.417h3.75l-39.778 39.784 2.381 1.3503 0.0173-5e-3 41.129-41.129h3.75l-42.501 42.493 0.10124 0.0574h3.6l42.55-42.55v3.75l-38.8 38.8h3.75l35.05-35.05v3.75l-31.3 31.3h3.75l27.55-27.55v3.75l-23.8 23.8h3.75l20.05-20.05v3.75l-16.3 16.3h3.75l12.55-12.55v3.75l-8.8 8.8h3.75l5.05-5.05v3.75l-1.3 1.3";
p1001 ="h2.75 l-2.75 -2.75v-2.75 l5.5 5.5h2.75 l-8.25 -8.25v-2.75 l11 11h2.75 l-13.75 -13.75v-2.75 l16.5 16.5h2.75 l-19.25 -19.25v-2.75 l22 22h2.75 l-24.75 -24.75v-2.75 l27.5 27.5h2.75 l-30.25 -30.25v-2.75 l33 33h2.75 l-35.75 -35.75v-2.75 l38.5 38.5h2.75 l-41.25 -41.25v-1.3h1.45l42.55 42.55h2.15l0.38287-0.21713 0.0012 1e-3 -42.334-42.334h2.75l41.339 41.339-7.5e-4 -7.5e-4 1.7543-0.99575-40.342-40.342h2.75l39.348 39.348-5e-4 -5e-4 1.7548-0.99516 1e-3 1e-3 -38.353-38.353h2.75l37.358 37.358-1e-3 -1e-3 -3.8e-5 -4e-5 0.84296-0.47804 1.0549-0.37478c-14.183-14.183-22.322-22.321-36.505-36.504h2.75l35.785 35.785-0.0018-2e-3 2.0307-0.72144-35.064-35.062h2.75l34.343 34.341 2.0274-0.72027 0.0015 0.0015-33.622-33.622h2.7471l32.901 32.901 0.20154-0.0716 2.0784-0.40061-32.428-32.428h2.75l31.982 31.988 2.3133-0.44422c-14.183-14.183-17.362-17.36-31.545-31.543h2.75l31.102 31.102-0.0015-0.0015 2.3092-0.44078c-9.5138-9.5138-18.876-18.876-27.972-27.972l5.2623 2.9833 0.73112 0.26052 24.282 24.283 0.1871-0.03593h2.529l3e-3 0.0028-22.734-22.734 4.2653 1.5143 21.215 21.216 2.7516 0.0015 3e-3 0.0028-20.137-20.135 3.4074 0.65584 19.479 19.479-3e-3 -0.0028h2.7527l-18.827-18.825 3.4063 0.65411c10.058 10.058 8.1057 8.1084 18.164 18.167h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.808 17.808-4e-3 -0.0038h0.521l2.7593 0.52987 2e-3 0.0015-18.339-18.339 2.7496 7.5e-4 18.992 18.992-2e-3 -0.0015 3.4041 0.65368 5e-4 5e-4 -19.645-19.646h2.751l20.298 20.299-5e-4 -5e-4 0.82963 0.15931 3.2246 1.1456 2e-3 2e-3 -21.604-21.604 2.7488-0.0012-2.3e-4 -2.27e-4 23.121 23.12 3.9087 1.3886 0.53145 0.30138-24.961-24.96 2.311-0.43896 29.002 29.001 3.1167 1.7675h1.4l-31.213-31.213 2.3055-0.44329 31.657 31.656h2.75l-32.098-32.098 2.3066-0.44498 32.541 32.543h2.75l-33.085-33.083 2.0308-0.72057 33.804 33.804h2.75l-34.523-34.523 2.0288-0.72119 35.245 35.245h2.75l-35.965-35.965 2.0283-0.72168 36.687 36.687h2.75l-37.61-37.61-2.5e-4 -5.75e-4 1.7546-0.99505-5e-4 -4.5e-4 38.606 38.606h2.75l-39.6-39.6 1.7554-0.99463 40.595 40.595h2.75c-13.864-13.864-27.728-27.728-41.591-41.591l2.5e-4 3.15e-4 1.691-0.95898h0.1l42.55 42.55h2.75l-42.55-42.55h2.75l40.55 40.55v-2.75 l-37.8 -37.8h2.75 l35.05 35.05 v-2.75 l-32.3 -32.3h2.75 l29.549999999999997 29.549999999999997 v-2.75 l-26.799999999999997 -26.799999999999997h2.75 l24.049999999999997 24.049999999999997 v-2.75 l-21.299999999999997 -21.299999999999997h2.75 l18.549999999999997 18.549999999999997 v-2.75 l-15.799999999999997 -15.799999999999997h2.75 l13.049999999999997 13.049999999999997 v-2.75 l-10.299999999999997 -10.299999999999997h2.75 l7.549999999999997 7.549999999999997 v-2.75 l-4.799999999999997 -4.799999999999997h2.75 l2.049999999999997 2.049999999999997v-2.049999999999997";
p1002 ="h2.75 l-2.75 2.75v2.75 l5.5 -5.5h2.75 l-8.25 8.25v2.75 l11 -11h2.75 l-13.75 13.75v2.75 l16.5 -16.5h2.75 l-19.25 19.25v2.75 l22 -22h2.75 l-24.75 24.75v2.75 l27.5 -27.5h2.75 l-30.25 30.25v2.75 l33 -33h2.75 l-35.75 35.75v2.75 l38.5 -38.5h2.75 l-41.25 41.25v1.3h1.45l42.55-42.55h2.15l0.38287 0.21713 1e-3 -1e-3 -42.334 42.334h2.75l41.339-41.339-7.5e-4 7.5e-4 1.7543 0.99575-40.342 40.342h2.75l39.348-39.348-5e-4 5e-4 1.7548 0.99516 1e-3 -1e-3 -38.353 38.353h2.75l37.358-37.358-0.00104 0.00104 0.84296 0.47804 1.0549 0.37478c-14.183 14.183-22.322 22.321-36.505 36.504h2.75l35.785-35.785-2e-3 2e-3 2.0307 0.72144-35.064 35.062h2.75l34.343-34.341 2.0274 0.72027 2e-3 -0.0015-33.622 33.622h2.7471l32.901-32.901 0.20154 0.0716 2.0784 0.40061-32.428 32.428h2.75l31.982-31.988 2.3133 0.44422c-14.183 14.183-17.362 17.36-31.545 31.543h2.75l31.102-31.102-2e-3 0.0015 2.3092 0.44078-27.972 27.972 5.2623-2.9833 0.73112-0.26052 24.282-24.283 0.1871 0.03593h2.529l3e-3 -0.0028-22.734 22.734 4.2653-1.5143 21.215-21.216 2.7516-0.0015 3e-3 -0.0028-20.137 20.135 3.4074-0.65584 19.479-19.479-3e-3 0.0028h2.7527l-18.827 18.825 3.4063-0.65411c10.058-10.058 8.1057-8.1084 18.164-18.167h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.808-17.808-4e-3 0.0038h0.521l2.7593-0.52987 2e-3 -0.0015-18.339 18.339 2.7496-7.5e-4 18.992-18.992-2e-3 0.0015 3.4041-0.65368 5e-4 -5e-4 -19.645 19.646h2.751l20.298-20.299-5e-4 5e-4 0.82963-0.15931 3.2246-1.1456 2e-3 -2e-3 -21.604 21.604 2.7488 0.0012-2.3e-4 2.27e-4 23.121-23.12 3.9087-1.3886 0.53145-0.30138-24.961 24.96 2.311 0.43896 29.002-29.001 3.1167-1.7675h1.4l-31.213 31.213 2.3055 0.44329 31.657-31.656h2.75l-32.098 32.098 2.3066 0.44498 32.541-32.543h2.75l-33.085 33.083 2.0308 0.72057 33.804-33.804h2.75l-34.523 34.523 2.0288 0.72119 35.245-35.245h2.75l-35.965 35.965 2.0283 0.72168 36.687-36.687h2.75l-37.61 37.61-2.5e-4 5.7e-4 1.7546 0.99505-5e-4 4.5e-4 38.606-38.606h2.75l-39.6 39.6 1.7554 0.99463 40.595-40.595h2.75l-41.591 41.591 2.5e-4 -3.1e-4 1.691 0.95898h0.1l42.55-42.55h2.75l-42.55 42.55h2.75l40.55-40.55v2.75 l-37.8 37.8h2.75 l35.05 -35.05 v2.75 l-32.3 32.3h2.75 l29.549999999999997 -29.549999999999997 v2.75 l-26.799999999999997 26.799999999999997h2.75 l24.049999999999997 -24.049999999999997 v2.75 l-21.299999999999997 21.299999999999997h2.75 l18.549999999999997 -18.549999999999997 v2.75 l-15.799999999999997 15.799999999999997h2.75 l13.049999999999997 -13.049999999999997 v2.75 l-10.299999999999997 10.299999999999997h2.75 l7.549999999999997 -7.549999999999997 v2.75 l-4.799999999999997 4.799999999999997h2.75 l2.049999999999997 -2.049999999999997v2.049999999999997"


function layer(t_,t1,t2,v,v1,v2,v_,frac) {
    console.log('layer is running');
    var lh = 0.5;
    console.log('layer lh =',lh);
    var ln = Math.round(4/lh);
    var id1 = 'layer'+(v_+1)+''+(repeat)+'';
    var sw=lh*5;
    //console.log('sw is',sw);
    document.getElementById('base').setAttribute('d',"m15 "+(272.5+(sw/2)+(0.5/2))+"h420v10h-420v-10")
    //console.log(document.getElementById('base').getAttribute('d'));
    document.getElementById('base').style.strokeWidth = 0.5;
    document.getElementById('base').setAttribute('class','draw');

    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    path.setAttributeNS(null,'id',id1);
    path.setAttributeNS(null,'fill','none');
    //console.log('id for front view is',id1);
    //console.log('path for front view is',path);
    document.getElementById(id1).setAttribute('d',"M25,"+(272.5-(v_*sw))+" l400 0.001") ;
    //console.log(document.getElementById(id1).getAttribute('d'));
    var len = 400;
    document.getElementById(id1).style.strokeWidth = sw;
    document.getElementById(id1).style.strokeLinecap = 'round';
    document.getElementById(id1).style.strokeDasharray = len;
    document.getElementById(id1).style.strokeDashoffset = len;
    document.getElementById(id1).style.zIndex = v_+1;
    document.getElementById(id1).style.stroke = "url(#myGradient)";
    document.getElementById(id1).style.animation = "animate "+(frac*t_)+"s linear "+((v*t)+(v1*t1)+(v2*t2))+"s forwards";
    console.log('id1 is',document.getElementById(id1));
}
function lastrepeat(v1) {
    console.log('lastrepeat is running');
    var lh = 0.5;
    console.log('lastrepeat lh =',lh);
    var ln = Math.round(4/lh);
    var id4 = 'lastrepeat'+(v1+1)+''+repeat+'';
    var id5 = 'lastrepeat'+(v1+2)+''+repeat+'';
    var sw=lh*5;
    //console.log('sw is',sw);
    var path7=document.createElementNS(svgNS,"path");
    svg.appendChild(path7);
    path7.setAttributeNS(null,'id',id4);
    path7.setAttributeNS(null,'fill','none');
    var path8=document.createElementNS(svgNS,"path");
    svg.appendChild(path8);
    path8.setAttributeNS(null,'id',id5);
    path8.setAttributeNS(null,'fill','none');
    //console.log('id for front view is',id1);
    //console.log('path for front view is',path);
    console.log('pathlast1',path7);
    console.log('pathlast2',path8);
    document.getElementById(id4).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p1001+"") ;
    document.getElementById(id5).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+"v-42.55"+p1002+"");

    //console.log(document.getElementById(id1).getAttribute('d'));
    document.getElementById(id4).style.strokeWidth = 1.4;
    document.getElementById(id4).style.zIndex = v1+1;
    document.getElementById(id5).style.strokeWidth = 1.4;
    document.getElementById(id5).style.zIndex = v1+2;
    document.getElementById(id4).setAttribute("class","drawrepeat");
    document.getElementById(id5).setAttribute("class","drawrepeat");
}
function imgmove(t_,t1,t2,n1,n2,n3,n)
{
    var lh =0.5;
    var ln = Math.round(4/lh);
    var sw=lh*5;
    document.getElementById('img0').style.visibility="hidden";
    console.log('cond is false');
    console.log('imgmove is running');
    var id3 = 'img'+(n+1)+'';
    //console.log('id3 is',id3);
    var img = document.createElement('img');
    img.src="Images/extruder.png";
    img.setAttribute('id',id3);
    img.setAttribute('width','50px');
    img.setAttribute('position','absolute');
    img.setAttribute('left','170px');
    img.setAttribute('height','75px');
    img.style.visibility='hidden';
    document.getElementById('step-2').appendChild(img);
    //console.log('visiblity',document.getElementById(id3).style.visibility);
    //console.log(document.getElementById(id3).getAttribute('id'));
    document.getElementById(id3).style.zIndex = n+ln;
    document.getElementById(id3).style.position = "absolute";
    document.getElementById(id3).style.bottom = ''+(130+((n+1)*sw*1.5))+'px';
    //console.log('bottom is',document.getElementById(id3).style.bottom);
    if ((n<2)  || (n>(ln-3))) {
        document.getElementById(id3).style.animation = "animateimgtb "+t_+"s linear "+((n1*t)+(n2*t1)+(n3*t2))+"s  forwards";
        img.addEventListener("animationstart",()=>{
            img.style.visibility='visible';
        })
        img.addEventListener("animationend",()=>{
            document.getElementById(id3).style.visibility = "hidden";			})
    } else {
        document.getElementById(id3).style.animation = "animateimg "+t_+"s linear "+((n1*t)+(n2*t1)+(n3*t2))+"s  forwards";
        img.addEventListener("animationstart",()=>{
            img.style.visibility='visible';           })
        img.addEventListener("animationend",()=>{
            img.style.visibility = "hidden";			})
    }
}

function first(z) {
    console.log('first is running');
    document.getElementById('drawlayer1').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p1001+"");
    if (repeat == 1) {
        var path1 = document.querySelector(".svg path[id = 'drawlayer1']");
        var len1 = path1.getTotalLength();
        console.log('drawlayer1 is',document.getElementById('drawlayer1'));
        document.getElementById('drawlayer1').style.strokeDasharray = len1;
        document.getElementById('drawlayer1').style.strokeDashoffset = len1;
        document.getElementById('drawlayer1').style.strokeWidth = 1.4;
        document.getElementById('drawlayer1').style.zIndex=z;
        document.getElementById('drawlayer1').style.animation = "animate1 "+t+"s linear forwards";
        layer(t,0,0,0,0,0,0,0.0508);
        imgmove(t,0,0,0,0,0,0);

        document.getElementById('drawlayer2').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+"v-42.55"+p1002+"");
        var path2 = document.querySelector(".svg path[id = 'drawlayer2']");
        var len2 = path2.getTotalLength();
        console.log('drawlayer2 is',document.getElementById('drawlayer2'));
        document.getElementById('drawlayer2').style.strokeDasharray = len2;
        document.getElementById('drawlayer2').style.strokeDashoffset = len2;
        document.getElementById('drawlayer2').style.strokeWidth = 1.4;
        document.getElementById('drawlayer2').style.zIndex=z+1;
        document.getElementById('drawlayer2').style.animation = "animate1 "+t+"s linear "+t+"s forwards";
        layer(t,0,0,1,0,0,1,0.0508);
        imgmove(t,0,0,1,0,0,1);
        setTimeout(function()
		{
		    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:250px;"
            document.getElementById("notes").innerHTML="For the top and bottom layers, the infill is always 100%.";
        },3000);
        setTimeout(function()
	    {
	        document.getElementById("notes").style.visibility="hidden";
        },((t-1)*1000));
        setTimeout(function()
        {
            document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:250px;"
            document.getElementById("notes").innerHTML="For each layer, the outer shell is printed first.";
        },(t*1000));
        setTimeout(function()
        {
            document.getElementById("notes").style.visibility="hidden";
        },((t*1.2295)*1000));

        setTimeout(function()
        {
            document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:250px;"
            document.getElementById("notes").innerHTML="Then the inner cavity is filled with infill material.";
        },((t*1.25)*1000));
        setTimeout(function()
        {
            document.getElementById("notes").style.visibility="hidden";
        },(t*2*1000));

        setTimeout(function()
        {
            document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:150px; top:250px;"
            document.getElementById("notes").innerHTML="For the inner layers, the infill is determined by the infill density value.";
        },(((t*2)+1)*1000));
        setTimeout(function()
        {
            document.getElementById("notes").style.visibility="hidden";
        },(((t*3)-1)*1000));
        }
}

function middle1(z,callback,t2) {
    console.log('middle1 is running');
    if (document.getElementById("infill").innerHTML==20)
    {
        h=12.5;
        p1 = p201;
        p2 = p202;    }
    else if (document.getElementById("infill").innerHTML==40)
    {
        h=7.5;
        p1 = p401;
        p2 = p402;      }
    else if (document.getElementById("infill").innerHTML==60)
    {
        h=5.5;
        p1 = p601;
        p2 = p602;      }
    else if (document.getElementById("infill").innerHTML==80)
    {
        h=3.75;
        p1 = p801;
        p2 = p802;     }
    else
    {
        h=2.75;
        p1 = p1001;
        p2 = p1002;    }
    var lh = 0.5;
    console.log('middle1 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle1 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id2 = 'drawlayer'+(z+1)+''+repeat+'';
    path.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d31+""+p1+"");
    console.log('path3',path);
    if (repeat==1) {
        var path3 = document.getElementById(id2);
        var len3= path3.getTotalLength();
        var t1 = len3/(11662.668945/t);
        console.log('t1 is ',t1)
        //var len3 = 10792.662109375;
        document.getElementById(id2).style.strokeDasharray = len3;
        document.getElementById(id2).style.strokeDashoffset = len3;
        document.getElementById(id2).style.strokeWidth = 1.5;
        document.getElementById(id2).style.zIndex=z;
        document.getElementById(id2).style.animation = "animate1 "+t1+"s linear "+(2*t+z1*t1+z2*t2)+"s forwards";
        //console.log(len3);
        layer(t1,t1,t2,2,z1,z2,z,0.1243);
        imgmove(t1,t1,t2,2,z1,z2,z);
    }
    if (z<(ln-3)) {
        z++;
        z1++;
        callback(z,t1);
    }

}
function middle2(z,t1) {
    console.log('middle2 is running');
    if (document.getElementById("infill").innerHTML==20)
    {
        h=12.5;
        p1 = p201;
        p2 = p202;    }
    else if (document.getElementById("infill").innerHTML==40)
    {
        h=7.5;
        p1 = p401;
        p2 = p402;      }
    else if (document.getElementById("infill").innerHTML==60)
    {
        h=5.5;
        p1 = p601;
        p2 = p602;      }
    else if (document.getElementById("infill").innerHTML==80)
    {
        h=3.75;
        p1 = p801;
        p2 = p802;     }
    else
    {
        h=2.75;
        p1 = p1001;
        p2 = p1002;    }
    var lh =0.5;
    console.log('middle2 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle2 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id2 = 'drawlayer'+(z+1)+''+repeat+'';
    path.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d32+""+p2+"");
    console.log('path4',path);
    if (repeat==1){
        var path4 = document.getElementById(id2);
        var len4= path4.getTotalLength();
        var t2 = len4/(11662.668945/t);
        console.log('t2 is ',t2)
        //var len4 = 10838.162109375;
        document.getElementById(id2).style.strokeDasharray = len4;
        document.getElementById(id2).style.strokeDashoffset = len4;
        document.getElementById(id2).style.strokeWidth = 1.5;
        document.getElementById(id2).style.zIndex=z;
        document.getElementById(id2).style.animation = "animate1 "+t2+"s linear "+(2*t+z1*t1+z2*t2)+"s forwards";
        layer(t2,t1,t2,2,z1,z2,z,0.1243);
        imgmove(t2,t1,t2,2,z1,z2,z);
    }
    if (z<(ln-3)) {
        z++;
        z2++;
      //  console.log("new z for middle1 is",z);
        middle1(z,middle2,t2);
    }
    else{
        if (repeat==1) {
            last(z,z1,z2,t1,t2);
        }
    }
}


function last(z,z1,z2,t1,t2) {
    console.log('last is running');
    document.getElementById('drawlayer7').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p1001+"");
    console.log('path5',document.getElementById('drawlayer7'));
    if (repeat==1) {
        var path5 = document.querySelector(".svg path[id = 'drawlayer7']");
        var len5= path5.getTotalLength();
        console.log('len5 is',len5);
        document.getElementById('drawlayer7').style.strokeDasharray = len5;
        document.getElementById('drawlayer7').style.strokeDashoffset = len5;
        document.getElementById('drawlayer7').style.strokeWidth = 1.4;
        document.getElementById('drawlayer7').style.zIndex=z;
        document.getElementById('drawlayer7').style.animation = "animate1 "+t+"s linear "+(2*t+z1*t1+(z2+1)*t2)+"s forwards";
        layer(t,t1,t2,2,z1,z2+1,6,0.0508);
        imgmove(t,t1,t2,2,z1,z2+1,6);
    }
    document.getElementById('drawlayer8').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+"v-42.55"+p1002+"");
    console.log('path6',document.getElementById('drawlayer8'));
    if (repeat==1) {
        var path6 = document.querySelector(".svg path[id = 'drawlayer8']");
        var len6 = path6.getTotalLength();
        console.log('len6 is',len6);
        document.getElementById('drawlayer8').style.strokeDasharray = len6;
        document.getElementById('drawlayer8').style.strokeDashoffset = len6;
        document.getElementById('drawlayer8').style.strokeWidth = 1.4;
        document.getElementById('drawlayer8').style.zIndex=z+1;
        document.getElementById('drawlayer8').style.animation = "animatelast "+t+"s linear "+(3*t+z1*t1+((z2+1)*t2))+"s forwards";
        layer(t,t1,t2,3,z1,z2+1,7,0.0508);
        imgmove(t,t1,t2,3,z1,z2+1,7);
    }
}

function print()
{
    myStopFunction();
    var lh = 0.5;
    console.log('print lh =',lh);
    var ln = Math.round(4/lh);
    console.log("ln is",ln);
    //imgmove(0);
    first(0);
    middle1(2,middle2,0);
}

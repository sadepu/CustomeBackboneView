Main problem the Backbone users are facing is zombie views. Whenever we route to the same this for multiple times then we end up having multiple views though their Graphical UI template doesn't exit called Zombie Views.

Same thing is here. When I go to home or profile for multiple time I might get multiple views of home and profile.

To kill these zombie views just extended backbone view object creation using "creatView" function.

Another reason of triggering multiple events though could be rendering two different views in the same 'el' and when these two view templates have any elements with same reference(say ids) which is shown in the example.

To avoid such zombie events to happen either you need to have totally different ids or references or use custom backbone view.

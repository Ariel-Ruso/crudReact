Para construir esta crud api, utilizo node js, sequielize con mysql.

Puede crear, actualizar, eliminar y buscar tutos por titulo.

Metodos	    Urls    	             Actions
GET	        api/tuto	            get todos los  Tutos
GET	        api/tuto/:id	        get tuto x id
POST	    api/tuto	            add nuevo tuto
PUT	        api/tuto/:id	        update tuto x id
DELETE	    api/tuto/:id	        remove tuto x id
DELETE	    api/tuto	            remove todos los tuto
GET	        api/tuto/published	    find todos tutos publicados
GET	        api/tuto?title=[kw]     find todos tuto con titulo tenga 'kw'

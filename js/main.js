const Asistencias = Vue.component('asistencias',{
    template:'#asistencias'
})
const Reclamos = Vue.component('reclamos',{
    template:'#reclamos'
})
const NuevaAsistencia = Vue.component('nuevaAsistencia',{
    template:'#nueva_asistencia',
    data() {
        return{
            band: false,
            asistencia: false,
            reclamo: false,
            modelo: '',
            producto: '',
        }
    },
    methods:{
        asistenciaON() {
            this.reclamo=false
            this.band=true
            this.asistencia=true
        },
        reclamoON() {
            this.asistencia=false
            this.band=true
            this.reclamo=true
        },
        goAsistencias() {
            this.$router.push('/asistencias')
        },
        goReclamos() {
            this.$router.push('/reclamos')
        }
    }
})
const Login = Vue.component('login',{
    template: '#login',
    created() {
        navbar.navbar = false
    },
    methods:{
        login() {
            navbar.navbar=true
            this.$router.push('/asistencias')
        }
    }
})
const Informe = Vue.component('informe',{
    template:'#informes',
    data() {
        return{
            informes:[
                'informe_1',
                'informe_2',
                'informe_3',
            ],
            meses:[
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
            ],
            years:[
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
            ]
        }
    }
})

const routes=[
    { path: '/', component: Login },
    { path: '/nueva_asistencia', component: NuevaAsistencia },
    { path: '/asistencias', component: Asistencias },
    { path: '/reclamos', component: Reclamos },
    { path: '/informes', component: Informe },
]
const router = new VueRouter({
    routes
})

var navbar = new Vue({
    router,
    el:'.navbar',
    mounted() {
        if (this.windowWidth>=768){
            this.menu=true
        }
        console.log('navbar creada: ',this.$route.path)

            this.navbar = true
        
        
    },
    data:{
        items:[
            {name:'Nueva Asistencia', link: '/nueva_asistencia'},
            {name:'Ver Asistencias', link: '/asistencias'},
            {name:'Reclamos', link: '/reclamos'},
            {name:'Informes', link: '/informes'},
            {name: 'Salir', link: '/'}
        ],
        menu:false,
        navbar:false,
    },
    methods:{
        mostrarMenu() {
            this.menu=!this.menu
        },
    },
    computed:{
        windowWidth() {
            return window.innerWidth;
        }
    }
});
var main = new Vue({
    router,
    el:'main',
})
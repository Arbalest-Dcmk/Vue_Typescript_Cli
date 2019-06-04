import {Vue,Component} from 'vue-property-decorator'


@Component({
    template:'<h1>{{title}}</h1>'
})
class Home extends Vue{
    title:title='this is ts vue'
   
}
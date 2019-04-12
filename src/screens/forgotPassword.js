







export default class forgotPassword extends Component<{}>{
   static navigationOptions = {
       title: 'forgotPassword'
   };

   constructor(props) {
       super(props)

       this.state= {

       };
       constructor(props){
           super(props)

           this.state = {
               prevScreenTitle: this.props.navigation.state.params.prevScreenTitle


           }
       }

   }
   render() {
       return (
           <view style={styles.container}>
               <Text>This forgot password screen :D</Text>
               <Text>previous screen is {this.state.prevScreenTitle}</Text>
           </view>
       );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "pink"
    },
})
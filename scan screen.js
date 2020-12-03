import{Text,View,TouchableOpacity,Image,StyleSheet} from 'react-native'
export default class ScanScreen extends React.Component{
    constructor(){
        super()
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
}
getCameraPermissions=async()=>{
    const{status}=await permissions.askAsync(Permissions.CAMERA)

    this.setState({
        hasCameraPermissions:status ==="granted"
    })
}

handleBarCodeScanned=async({type,data})=>{
    this.setState({
        scanned:true,
        scannedData : data,
        buttonState:'normal'
    })
}

if(buttonState ==="clicked" && hasCameraPermissions){
    return(
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
    />
        )
}

else if(buttonState==="normal"){
    return(
        <View style={Styles.container}>
            <Text style={styles.displayText}>{
    hasCameraPermissions===true ? this.state.scannedData:"Request Camera Permission"
            }
</Text>
 <TouchableOpacity
 onpress={this.getCameraPermissions}
 style={styles.scanButton}>
     <Text style={styles.buttonText}>Scan QR Code</Text>
 </TouchableOpacity>
 
        </View>
    )
}

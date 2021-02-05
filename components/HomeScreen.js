import React,{useEffect,useState} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import Axios from 'axios'
import Snackbar from 'react-native-snackbar';

const HomeScreen = () => {
    const [apiData, setApiData] = useState('');
    const [windowWidth,setWindowWidth]=useState(50)
    useEffect(() => {
    setWindowWidth(Dimensions.get('window').width);
    fetchData()

  }, []);

    const fetchData = async() => {
        const api='http://playonnuat-env.eba-ernpdw3w.ap-south-1.elasticbeanstalk.com/api/v1/establishment/test/list?offset=0&limit=10'
        try {
            const tempData = await Axios.get(api);
            setApiData(tempData.data)
            console.log(tempData.data[0].name)
        } catch (error) {
            console.log(error)
            Snackbar.show({
                    text: 'Some error occurred',
                    duration: Snackbar.LENGTH_INDEFINITE,
                    backgroundColor: '#f10',
                    action: {
                        text: 'Retry',
                        textColor: 'green',
                        onPress: () => { fetchData() },
                    },
                });
        }
    }

    const Item = ({ eachData }) => (
        
        <TouchableOpacity style={[styles.eachDataStyle,{width:windowWidth-40}]} onPress={() => {
            Snackbar.show({
                text: `ID: ${eachData.id} `,
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: '#859',
            });
        }}>
            <View style={styles.eachDataStyle}>
                <Image
                    resizeMode='contain'
                    style={{marginBottom:10,alignSelf:'center'}}
                    source={{
                        uri: eachData.sports.iconWhiteUrl,
                        width: 100,
                        height: 100,
                    }}
                />
                <Text style={{
                    textTransform: 'uppercase',
                    color: '#fff',
                    fontSize:30
                }}>{eachData.name}</Text>
                <Text style={{
                    color: '#ffca00',
                    marginVertical:5,
                    fontSize:20
                }}>{`Sports Type: ${eachData.sports.name}`}</Text>
                <Text style={{
                    color: '#ffca85',
                    marginTop:3,
                }}>{`Open on(Every Weeks):`}</Text>
                <Text style={{
                    color: '#ffca85',
                    marginBottom:3,
                }}>{`       ${eachData.dayOfWeeksOpen}`}</Text>
                <Text style={{
                    marginVertical:3,
                    color:'#ffca85'
                }}>{`Open Time: ${eachData.openTime}`}</Text>
                <Text style={{
                    marginVertical:3,
                    color:'#ffca85'
                }}>{`Close Time: ${eachData.closeTime}`}</Text>
                <Text style={{
                    marginVertical:3,
                    color:'#ffca85'
                }}>{`Time Slot Size: ${eachData.slotTimeSize}`}</Text>
                <Text style={{
                    marginVertical:3,
                    color:'#ffca85'
                }}>{`Cost Per Slot: ${eachData.costPerSlot}`}</Text>
            
            
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
            <View>
                {/* {console.log(item + "  8989")} */}
                <Item eachData={item} />
        </View>
    )
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#662900' }}>
          {apiData === '' ? <ActivityIndicator size="large" color="#00ff00" /> : (
              <FlatList 
                        data={apiData}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                    />
          )}
    </View>
  );
}
export default HomeScreen;

styles = StyleSheet.create({
    eachDataStyle: {
        backgroundColor: '#163c4a',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 1,
        alignSelf:'center'
    }
})
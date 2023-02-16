import { Text, View, StyleSheet, Image } from 'react-native'
import { Link } from 'react-router-native'

const Home = () => {



    return (
        <View style={styles.container}>

            <Text style={styles.text}>Choisir une option</Text>
            <View style={styles.conn}>


                <View style={styles.card}>

                    <Link to={'/emprunter'}><Image style={styles.img} source={require('../assets/worldbook.png')}></Image></Link>
                    <Text style={styles.txt}>Emprunter un livre</Text>
                </View>
                <View style={styles.card}>
                    <Link to={'/rendre'}><Image style={styles.img} source={require('../assets/back.png')}></Image></Link>
                    <Text style={styles.txt}>Rendre un livre</Text>
                </View>
            </View>

        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A6A6A6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    text: {
        marginTop: "6%",
        marginBottom: "3%",
        fontSize: 40,
        color: "#003147",
        fontWeight: "bold",
    },
    conn: {
        width: '60%',
        backgroundColor: '#A6A6B1',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: "#003147",
        borderWidth: 1,
    },
    card: {
        alignItems: 'center',
        marginVertical: 50,
    },
    img: {
        width: 150,
        height: 150,
    },
    txt: {
        fontSize: 20,
        color: "#003147",
        fontWeight: "bold",
    }
});
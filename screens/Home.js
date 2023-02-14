import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

const Home = () => {


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Choisir une option</Text>

            <View style={styles.card}>
                <Link to={'/emprunter'}><Text>Emprunter</Text></Link>
                <Text>Emprunter un livre</Text>
            </View>
            <View style={styles.card}>
                <Link to={'/rendre'}><Text>Rendre</Text></Link>
                <Text>Rendre un livre</Text>
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
        // justifyContent: 'center',
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
        width: "90%",
        height: 350,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: "#FFF",
        borderWidth: 10,
        overflow: 'hidden'
    },
    card:{
        alignItems:'center',
        marginVertical:25,
    },
});
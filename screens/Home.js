import { Text, View, StyleSheet, Button, TextBase } from 'react-native'
import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Home = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [Res, setRes] = useState('rien');

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`QRCode : \n` + `${data}`);
        setRes(data)
    };

    if (hasPermission === null) {
        return <Text>En attente d'accès à la caméra</Text>;
    }
    if (hasPermission === false) {
        return <Text>Impossible d'accéder à la caméra</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Scanner un QRCode</Text>

            <View style={styles.conn}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 400, width: 400 }}
                />
            </View>
            <Text style={styles.textRes}>{Res}</Text>
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        margin: 0,
    },
    text: {
        marginTop: 50,
        fontSize: 40,
        color: "#003147",
        fontWeight: "bold",
    },
    textRes: {
        marginVertical: 20,
        fontSize: 20,
        color: "#003147",
        fontWeight: "bold",
    },
    conn: {
        width: 400,
        height: 400,
        backgroundColor: 'whitesmoke',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: "#003147",
        borderWidth: 1,
        overflow: 'hidden'
    },
});
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import type { RootStackParamList } from '../Navigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    return (
        <ScrollView style={styles.container}>
            <Entypo name="home" size={80} color="#2988b4" style={{alignSelf: 'center', marginTop: 20, marginBottom: 10}} />
            <Text style={styles.title}>Smart Home Dashboard</Text>

            <Text style={styles.welcome}> Welcome, Nikozen! </Text>

            <View style={styles.card}> 
                <View style={styles.row}>
                    <View style={styles.pane}>
                        <MaterialCommunityIcons name="lightbulb" size={50} color="#2988b4" />
                        <Text style={styles.paneText}>Light</Text>
                        <Text style={styles.paneStatus}>ON</Text>
                    </View>

                    <View style={styles.pane}>
                        <MaterialCommunityIcons name="fan" size={50} color="#2988b4" />
                        <Text style={styles.paneText}>Fan</Text>
                        <Text style={styles.paneStatus}>OFF</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.pane}>
                        <MaterialCommunityIcons name="snowflake" size={50} color="#2988b4" />
                        <Text style={styles.paneText}>AC</Text>
                        <Text style={styles.paneStatus}>ON</Text>
                    </View>

                    <View style={styles.pane}>
                        <MaterialCommunityIcons name="lock" size={50} color="#2988b4" />
                        <Text style={styles.paneText}>Lock</Text>
                        <Text style={styles.paneStatus}>Locked</Text>
                    </View>
                </View> 
            </View>

            <Pressable
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Devices')}
            >
                <Text style={styles.buttonText}> <MaterialCommunityIcons name="view-grid" size={20} color="white" /> View Devices</Text>
            </Pressable>


           
        </ScrollView>

        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  welcome: {
    fontSize: 15,
    marginTop: 5,
    alignSelf: 'center',
  },

    card: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 0,
    borderColor: '#2988b4',

  },

    row: {
    flex: 1,
    flexDirection: 'row',
  },

  pane: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: '#ffffff',
    borderColor: '#2988b4',
    margin: 5,
    borderRadius: 10,
  },
  
  paneText: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: 'bold',
  },
    paneStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#888888',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 5,
  },

    buttonContainer: { 
        backgroundColor: '#2988b4',
        padding: 10,
        borderRadius: 10,
        width: 290,
        alignSelf: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

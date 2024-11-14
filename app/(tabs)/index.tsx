import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

const MateriFlexBox = () => {
        return (
           <View>
            <View
             style={{flexDirection: 'row', backgroundColor: 'green', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{ backgroundColor: 'purple', width: 50, height: 50, }} />
                <View style={{ backgroundColor: 'blue', width: 50, height: 50 }} />
                <View style={{ backgroundColor: 'red', width: 50, height: 50 }} />
                <View style={{ backgroundColor: 'pink', width: 50, height: 50 }} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}} >
            <Text>Beranda</Text>
            <Text>Vidio</Text>
            <Text>Playlist</Text>
            <Text>Komunitas</Text>
            <Text>Channel</Text>
            <Text>Tentang</Text> 
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
             <Image source={{uri:
              'https://png.pngtree.com/png-vector/20240925/ourmid/pngtree-pocong-jumping-cartoon-illustration-vector-png-image_13898332.png'
             }}           
             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
            />
            <View>
             <Text style={{fontSize: 20, fontWeight: 'bold'}}>Pocong Gemoy</Text>
             <Text>7000 ribu subscriber</Text>
        </View>  
        </View>   
        </View>
        );
    };

export default MateriFlexBox;

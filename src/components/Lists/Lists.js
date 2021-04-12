import React from 'react'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import AdbIcon from '@material-ui/icons/Adb';
import AppleIcon from '@material-ui/icons/Apple';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'

export default function Lists() {
    return (
        <List component='nav'>
            <ListItem button>
                <ListItemIcon>
                    <AdbIcon />
                </ListItemIcon>
                <ListItemText primary='Android'/>
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemIcon>
                    <AppleIcon />
                </ListItemIcon>
                <ListItemText primary='iOS'/>
            </ListItem>
        </List>
    )
}

import { Grid } from '@mui/material'
import { colData } from './DCollapsData';
import {CollapsData} from './CollapsData';

export const DCollapes = () => {
   
    return (
        <Grid container>
            <CollapsData colData={colData[0]}/>
            <CollapsData colData={colData[1]}/>
            <CollapsData colData={colData[2]}/>
        </Grid>
    )
}

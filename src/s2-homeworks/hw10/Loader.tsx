import s from './Loader.module.css'
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// export const Loader = () => <div className={s.loader}/>
export const Loader = () => <div className={s.loader}>
    <Box sx={{ display: 'flex' }}>
        <CircularProgress />
    </Box>
</div>
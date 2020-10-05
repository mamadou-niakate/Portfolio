import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Rating from '@material-ui/lab/Rating';
import { Grid, Modal } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import styles from '../../../styleSheet.module.css';

class SkillForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: 2,
            hover: -1
        }
    }
    //const classes = useStyles();

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    setStars = (event, newValue) => { 
        this.setState({
            value: newValue
        });  
    }

    starsHover = (event, newHover) => { 
        this.setState({
            hover: newHover
        }); 
    }

    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    render() {
        return  (
            <Modal aria-labelledby="transition-modal-title"  aria-describedby="transition-modal-description"
                    open={this.state.open} onClose={this.handleClose} closeAfterTransition
                        BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, }}
                >
                    <Fade in={this.state.open}>
                        <div className={styles.paper}>
                            <h2 className={styles.title}>Ajout d'une nouvelle compétence</h2>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={12} lg={10} className={styles.groupForm}>
                                    <FormGroup>
                                        <FormControl>
                                            <InputLabel htmlFor="my-input">Compétence</InputLabel>
                                            <Input aria-describedby="my-helper-text" />
                                            <FormHelperText id="my-helper-text">Séléctionner une compétence</FormHelperText><br/>
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={10} className={styles.groupForm}>
                                    <FormGroup>
                                        <FormControl>
                                            <Rating name="hover-feedback" value={this.state.value} precision={0.5}
                                                    onChange={this.setStars} onChangeActive={this.starsHover}
                                            />
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={10} className={styles.groupForm}>
                                    <FormGroup>
                                        <FormControl> 
                                            <InputLabel htmlFor="my-input">Nombre d'années de pratique</InputLabel>
                                            <Input aria-describedby="my-helper-text" />
                                            <FormHelperText id="my-helper-text">Depuis combien d'année utiliser cet outil ?</FormHelperText>
                                        </FormControl>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={10} className={styles.groupForm}>
                                    <div className={styles.buttons}>
                                        <Button variant="contained" color="secondary" startIcon={<AddIcon /> } onClick={this.handleClose}> 
                                            Ajouter
                                        </Button>
                                        <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={this.handleClose}> 
                                            Annuler
                                        </Button>
                                    </div> 
                                </Grid>                               
                            </Grid>
                        </div>
                    </Fade>
                </Modal>
        )
    }
}
export default SkillForm;
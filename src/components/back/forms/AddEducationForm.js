import React, { Component } from 'react';
import {Grid, Modal } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import {TextareaAutosize } from '@material-ui/core';
import 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../../styleSheet.module.css';

class AddEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectedBeginDate: new Date('2014-08-18T21:11:54'),
            selectedEndDate: new Date('2014-08-18T21:11:54')
        }
    }

    // ouverture du modal
    handleOpen = () => { 
        this.setState({
            open: true
        })
    }

    // fermeture du modal
    handleClose = () => { 
        this.setState({
            open: false
        })
    }

    //selection de la date de début
    handleBeginDateChange = date => { 
        this.setState({
            selectedBeginDate: date
        })
    }
    
    //selection de la date de fin
    handleEndDateChange = date => { 
        this.setState({
            selectedEndDate: date
        })
    }

    render() {
        return (
            <Modal aria-labelledby="transition-modal-title"  aria-describedby="transition-modal-description"
                open={this.state.open} onClose={this.handleClose} closeAfterTransition
                BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, }}
            >
                <Fade in={this.state.open}>
                    <div className={styles.paperBis}>
                        <h2 id="transition-modal-title" className={styles.title}>Ajout d'une nouvelle formation</h2>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={10} className={styles.groupForm}>
                                <FormGroup>
                                    <FormControl>
                                        <InputLabel htmlFor="my-input">Établissement</InputLabel>
                                        <Input aria-describedby="my-helper-text" />
                                    </FormControl>
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={10} className={styles.groupForm}>
                                <FormGroup>
                                    <FormControl> 
                                        <InputLabel htmlFor="my-input">Diplôme</InputLabel>
                                        <Input aria-describedby="my-helper-text" />
                                    </FormControl>
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={10} className={styles.groupForm}>
                                <FormGroup>
                                    <FormControl className={styles.dateText}> 
                                        <label>Date de début</label>
                                        <DatePicker 
                                            className={styles.dateLabel}
                                            selected={this.state.selectedBeginDate} 
                                            onChange={this.handleBeginDateChange}
                                        />
                                    </FormControl>
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={10} className={styles.groupForm}>
                                <FormGroup>
                                    <FormControl className={styles.dateText}> 
                                        <label>Date de début</label>
                                        <DatePicker 
                                            className={styles.dateLabel}
                                            selected={this.state.selectedEndDate}
                                            onChange={this.handleEndDateChange} 
                                        />
                                    </FormControl>
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={10} className={styles.groupForm}>
                                <FormGroup>
                                    <FormControl> 
                                        <TextareaAutosize aria-label="Description" rowsMin={4} placeholder="Description" />
                                    </FormControl>
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={10} className={styles.groupForm}>
                                <div className={styles.buttons}>
                                    <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={this.handleClose}> 
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
export default AddEducation; 
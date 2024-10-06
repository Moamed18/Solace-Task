import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';
import { User, Nationality, EDIT_USER, GET_USER } from '../../graphql/queries';
import { useMutation } from '@apollo/client';


interface EditDataDialogProps {
    user: any;
    open: boolean;
    onClose: () => void;
}

const EditDataDialog: React.FC<EditDataDialogProps> = ({ user, open, onClose }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<User>({
        defaultValues: {
            title: user?.title || '',
            firstName: user?.firstName || '',
            fatherName: user?.fatherName || '',
            grandfatherName: user?.grandfatherName || '',
            familyName: user?.familyName || '',
            dependants: user?.dependants || 0,
            birthDay: user?.birthDay ? new Date(user?.birthDay).toISOString().split('T')[0] : '',
            gender: user?.gender || '',
            maritalStatus: user?.maritalStatus?.name || '',
            nationalId: {
                idNumber: user?.nationalId?.idNumber || '',
                expiryDate: user?.nationalId?.expiryDate ? new Date(user?.nationalId?.expiryDate).toISOString().split('T')[0] : '',
            },
            passport: {
                passportNo: user?.passport?.passportNo || '',
                passportIssueDate: user?.passport?.passportIssueDate ? new Date(user?.passport?.passportIssueDate).toISOString().split('T')[0] : '',
                passportExpiryDate: user?.passport?.passportExpiryDate ? new Date(user?.passport?.passportExpiryDate).toISOString().split('T')[0] : '',
            },
            localizedName: {
                firstName: user?.localizedName?.firstName || '',
                fatherName: user?.localizedName?.fatherName || '',
                grandfatherName: user?.localizedName?.grandfatherName || '',
                familyName: user?.localizedName?.familyName || '',
            },
            nationalities: user?.nationalities || [],
        },
    });
    const [nationalities, setNationalities] = useState<Nationality[]>(user?.nationalities || []);
    const [updateUser] = useMutation(EDIT_USER, {
        refetchQueries: [{ query: GET_USER }],
        onCompleted: () => {
            onClose();
        },
        onError: (error) => {
            console.error('Error updating user:', error.graphQLErrors);
        },
    });

    const handleFormSubmit: SubmitHandler<User> = (data) => {

        console.log("edit data :", data);

        const removeTypename = (obj: Record<string, any>): Record<string, any> => {
            const { __typename, ...rest } = obj;
            return Object.fromEntries(
                Object.entries(rest).map(([key, value]) => {
                    if (typeof value === 'object' && value !== null) {
                        return [key, removeTypename(value)];
                    }
                    return [key, value];
                })
            );
        };

        const cleanedDataArray = data?.nationalities.map(removeTypename);

        const userData = {
            title: data.title,
            birthDay: data.birthDay,
            gender: data.gender,
            passport: {
                id: 1,
                passportNo: data.passport.passportNo,
                passportIssueDate: data.passport.passportIssueDate,
                passportExpiryDate: data.passport.passportExpiryDate,
            },
            firstName: data.firstName,
            fatherName: data.fatherName,
            grandfatherName: data.grandfatherName,
            familyName: data.familyName,
            localizedName: {
                firstName: data.localizedName.firstName,
                fatherName: data.localizedName.fatherName,
                grandfatherName: data.localizedName.grandfatherName,
                familyName: data.localizedName.familyName,
            },
            nationalId: {
                idNumber: data.nationalId.idNumber,
                expiryDate: data.nationalId.expiryDate,
            },
            nationalities: cleanedDataArray,
            maritalStatus: {
                id: 1248,
                name: data.maritalStatus,
            },
            dependants: typeof data?.dependants === 'string'
                ? parseFloat(data.dependants)
                : data.dependants,
        };

        updateUser({ variables: { userData } })
            .then(response => {
                console.log("edit response :", response);
            })
            .catch(err => {
                console.error("edit error:", err.graphQLErrors);
            });
    };

    const handleChangeNationality = (index: number, value: string) => {
        const updatedNationalities = nationalities.map((nationality, i) => {
            if (i === index) {
                return { ...nationality, country: { ...nationality.country, name: value } };
            }
            return nationality;
        });
        setNationalities(updatedNationalities);
    };

    return (
        <Dialog open={open} onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
            }}>
            <DialogTitle >Edit User Information</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="grid grid-cols-4 gap-4 p-4">
                    <Box>
                        <TextField
                            label="National ID Number"
                            fullWidth
                            {...register('nationalId.idNumber', { required: 'National ID is required' })}
                            error={!!errors.nationalId?.idNumber}
                            helperText={errors.nationalId?.idNumber?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="National ID Expiring Date"
                            fullWidth
                            type="date"
                            {...register('nationalId.expiryDate', { required: 'Expiry Date is required' })}
                            error={!!errors.nationalId?.expiryDate}
                            helperText={errors.nationalId?.expiryDate?.message}
                            defaultValue={user?.nationalId?.expiryDate || ''}
                        />
                    </Box>
                    <Box>

                        <TextField
                            label="Title"
                            fullWidth
                            {...register('title', { required: 'title is required' })}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="First Name"
                            fullWidth
                            {...register('firstName', { required: 'First Name is required' })}
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Father Name"
                            fullWidth
                            {...register('fatherName', { required: 'Father Name is required' })}
                            error={!!errors.fatherName}
                            helperText={errors.fatherName?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Grandfather Name"
                            fullWidth
                            {...register('grandfatherName', { required: 'Grandfather Name is required' })}
                            error={!!errors.grandfatherName}
                            helperText={errors.grandfatherName?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Family Name"
                            fullWidth
                            {...register('familyName', { required: 'Family Name is required' })}
                            error={!!errors.familyName}
                            helperText={errors.familyName?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="الاسم الاول"
                            fullWidth
                            {...register('localizedName.firstName', { required: 'Localized First Name is required' })}
                            error={!!errors.localizedName?.firstName}
                            helperText={errors.localizedName?.firstName?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="اسم الاب"
                            fullWidth
                            {...register('localizedName.fatherName', { required: 'Localized Father Name is required' })}
                            error={!!errors.localizedName?.fatherName}
                            helperText={errors.localizedName?.fatherName?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="اسم الجد"
                            fullWidth
                            {...register('localizedName.grandfatherName', { required: 'Localized Grandfather Name is required' })}
                            error={!!errors.localizedName?.grandfatherName}
                            helperText={errors.localizedName?.grandfatherName?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="اللقب / اسم العائلة"
                            fullWidth
                            {...register('localizedName.familyName', { required: 'Localized Family Name is required' })}
                            error={!!errors.localizedName?.familyName}
                            helperText={errors.localizedName?.familyName?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Date of Birth"
                            fullWidth
                            type="date"
                            {...register('birthDay', { required: 'Date of Birth is required' })}
                            error={!!errors.birthDay}
                            helperText={errors.birthDay?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Gender"
                            fullWidth
                            {...register('gender', { required: 'Gender is required' })}
                            error={!!errors.gender}
                            helperText={errors.gender?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Passport No."
                            fullWidth
                            {...register('passport.passportNo', { required: 'Passport No. is required' })}
                            error={!!errors.passport?.passportNo}
                            helperText={errors.passport?.passportNo?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Passport Issue Date"
                            fullWidth
                            type="date"
                            {...register('passport.passportIssueDate', { required: 'Passport Issue Date is required' })}
                            error={!!errors.passport?.passportIssueDate}
                            helperText={errors.passport?.passportIssueDate?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Passport Expiry Date"
                            fullWidth
                            type="date"
                            {...register('passport.passportExpiryDate', { required: 'Passport Expiry Date is required' })}
                            error={!!errors.passport?.passportExpiryDate}
                            helperText={errors.passport?.passportExpiryDate?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Marital Status"
                            fullWidth
                            {...register('maritalStatus', { required: 'Marital Status is required' })}
                            error={!!errors.maritalStatus}
                            helperText={errors.maritalStatus?.message}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Dependants"
                            fullWidth
                            type="number"
                            {...register('dependants', { required: 'Dependants count is required' })}
                            error={!!errors.dependants}
                            helperText={errors.dependants?.message}
                        />
                    </Box>

                    {nationalities.map((nationality, index) => (
                        <Box key={index}>
                            <TextField
                                {...register(`nationalities.${index}.country.name`, { required: 'Country Name is required' })}
                                defaultValue={nationality.country.name}
                                error={!!errors.nationalities?.[index]?.country?.name}
                                helperText={errors.nationalities?.[index]?.country?.name?.message}
                                label="Nationality"
                                fullWidth
                                onChange={(e) => handleChangeNationality(index, e.target.value)}
                            />
                        </Box>
                    ))}
                    <DialogActions
                        className="flex justify-center items-center !w-full mt-4"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <Button
                            variant="contained"
                            className="bg-blue-800 text-white font-semibold rounded-md transition duration-200 w-[104px] h-[36px]"
                            onClick={onClose}
                            color="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            className="bg-blue-800 text-white font-semibold rounded-md transition duration-200 w-[104px] h-[36px] ml-4"
                            type="submit"
                            color="primary"
                        >
                            Save
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditDataDialog;

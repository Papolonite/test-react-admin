import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

const postFilters = [
    <TextInput source="nama_lengkap" label="Search" alwaysOn />,
];

export const UserList = props => (
    <List filters={postFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="nama_lengkap" />
            <TextField source="nama_panggilan" />
            <TextField source="tempat_lahir" />
            <TextField source="tanggal_lahir" />
            <TextField source="jenis_kelamin" />
            <TextField source="jurusan" />
            <TextField source="angkatan" />
            <TextField source="asal_sekolah" />
            <TextField source="id_line" />
            <TextField source="instagram" />
            <TextField source="bio" />
            <TextField source="foto_profil" />
            <TextField source="foto_profil_type" />
            <TextField source="role" />
            <TextField source="email" />
            <TextField source="refresh_token" />
            <ReferenceField source="kelompok_id" reference="kelompoks"><TextField source="id" /></ReferenceField>
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="username" />
            <TextInput source="nama_lengkap" />
            <TextInput source="nama_panggilan" />
            <TextInput source="tempat_lahir" />
            <TextInput source="tanggal_lahir" />
            <TextInput source="jenis_kelamin" />
            <TextInput source="jurusan" />
            <TextInput source="angkatan" />
            <TextInput source="asal_sekolah" />
            <TextInput source="id_line" />
            <TextInput source="instagram" />
            <TextInput source="bio" />
            <TextInput source="foto_profil" />
            <TextInput source="foto_profil_type" />
            <TextInput source="role" />
            <TextInput source="email" />
            <TextInput source="refresh_token" />
            <ReferenceInput source="kelompok_id" reference="kelompoks"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="username" />
            <TextInput source="nama_lengkap" />
            <TextInput source="nama_panggilan" />
            <TextInput source="tempat_lahir" />
            <TextInput source="tanggal_lahir" />
            <TextInput source="jenis_kelamin" />
            <TextInput source="jurusan" />
            <TextInput source="angkatan" />
            <TextInput source="asal_sekolah" />
            <TextInput source="id_line" />
            <TextInput source="instagram" />
            <TextInput source="bio" />
            <TextInput source="foto_profil" />
            <TextInput source="foto_profil_type" />
            <TextInput source="role" />
            <TextInput source="email" />
            <TextInput source="refresh_token" />
            <ReferenceInput source="kelompok_id" reference="kelompoks"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Create>
);
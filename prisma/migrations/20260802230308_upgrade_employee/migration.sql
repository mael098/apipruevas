BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[employee] ADD [calle] NVARCHAR(1000),
[categoria] INT,
[ciudad] NVARCHAR(1000),
[cla_contrato] INT,
[cla_estado_nac] INT,
[cla_forma_pago] INT,
[estado_domicilio] INT,
[lugar_nac] NVARCHAR(1000),
[nacionalidad] NVARCHAR(1000),
[niv_tab_sue] INT,
[regimen_contrata_sat] INT,
[sind] INT,
[tipo_salario] INT;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

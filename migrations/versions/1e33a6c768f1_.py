"""empty message

Revision ID: 1e33a6c768f1
Revises: 3ea40d006f85
Create Date: 2023-02-08 18:27:38.173759

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1e33a6c768f1'
down_revision = '3ea40d006f85'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('menues', schema=None) as batch_op:
        batch_op.add_column(sa.Column('url', sa.String(length=250), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('menues', schema=None) as batch_op:
        batch_op.drop_column('url')

    # ### end Alembic commands ###